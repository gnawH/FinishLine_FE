import { StyleSheet, css } from 'aphrodite';
import { useNavigate, Link } from 'react-router-dom';
import Header from '../components/header'; // Header 컴포넌트 import
import Footer from '../components/footer'; // Footer 컴포넌트 import
import logo2 from '../assets/images/logo2.png'; // 로고 이미지 import
import axios from 'axios'; // axios import 추가
import { useState } from 'react'; // useState import 추가

// Login 컴포넌트
function Login() {
    const navigate = useNavigate();
    // 폼 데이터를 위한 상태 추가
    const [formData, setFormData] = useState({
        studentId: '',
        password: ''
    });
    // 에러 메시지를 위한 상태 추가
    const [error, setError] = useState('');

    // 입력 필드 변경 핸들러
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // 폼 제출 핸들러
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // 입력값 유효성 검사 추가
        if (!formData.studentId || !formData.password) {
            setError('학번과 비밀번호를 모두 입력해주세요.');
            return;
        }

        try {
            // API 엔드포인트 변경
            const response = await axios.post('http://127.0.0.1:8000/user_auth/login/', {
                studentId: formData.studentId,
                password: formData.password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            // 응답 처리 로직 변경
            if (response.data.message === "Login successful") {
                // 사용자 정보를 localStorage에 저장
                localStorage.setItem('userName', response.data.user.name);
                localStorage.setItem('isLoggedIn', 'true');
                
                navigate('/userGuide');  // 로그인 성공 시 이동 경로 변경
            } else {
                setError('로그인에 실패했습니다. 학번과 비밀번호를 확인해주세요.');
            }
        } catch (err) {
            setError('로그인에 실패했습니다. 학번과 비밀번호를 확인해주세요.');
            console.error('로그인 에러:', err);
        }
    };

    const handleResisterClick = () => {
        navigate('/policy');
        window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
    };

    return (
        <div className={css(styles.loginContainer)}>
            {/* Header 컴포넌트 */}
            <Header />

            {/* 메인 섹션 */}
            <main className={css(styles.loginMain)}>
                <img src={logo2} alt="Finish Line Icon" className={css(styles.welcomeIcon)} />
                <h1 className={css(styles.welcomeText)}>Welcome to Finish Line!</h1>
                <h2 className={css(styles.loginTitle)}>로그인</h2>
                <p className={css(styles.loginDescription)}>Finish Line에 등록한 학번과 비밀번호를 입력해주세요.
                </p>

                {/* 로그인 폼 */}
                <form className={css(styles.loginForm)} onSubmit={handleSubmit}>
                    {error && <p className={css(styles.errorMessage)}>{error}</p>}
                    <label className={css(styles.formLabel)}>
                        학번
                        <input
                            type="text"
                            name="studentId"
                            value={formData.studentId || ''}
                            onChange={handleInputChange}
                            placeholder="학번을 입력하세요."
                            className={css(styles.formInput)}
                        />
                    </label>
                    <label className={css(styles.formLabel, styles.passwordLabel)}>
                        비밀번호
                        <input
                            type="password"
                            name="password"
                            value={formData.password || ''}
                            onChange={handleInputChange}
                            placeholder="비밀번호를 입력하세요."
                            className={css(styles.formInput)}
                        />
                        <a href="/forgot-password" className={css(styles.forgotPassword)}>비밀번호를 잊으셨나요?</a>
                    </label>
                    <button type="submit" className={css(styles.submitButton)}>로그인</button>
                </form>

                {/* 회원가입 섹션 */}
                <div className={css(styles.registerSection)}>
                    <div className={css(styles.line)}></div>
                    <span className={css(styles.registerText)}>아직 회원이 아니신가요?</span>
                    <Link to="/policy" className={css(styles.registerLink)} onClick={handleResisterClick}>회원가입</Link>
                    <div className={css(styles.line)}></div>
                </div>
            </main>

            {/* Footer 컴포넌트 */}
            <Footer />
        </div>
    );
}

// 스타일 정의
const styles = StyleSheet.create({
    // 전체 로그인 페이지 컨테이너
    loginContainer: {
        minHeight: '100vh',
        fontFamily: 'Lato',
        color: '#333',
        backgroundColor: '#FFFEFB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    // 메인 섹션
    loginMain: {
        flex: 1,
        width: '100%',
        textAlign: 'center',
    },

    // 웰컴 위의 아이콘
    welcomeIcon: {
        display: 'block',
        margin: '0 auto 0px',
        height: '100px',
    },

    // 웰컴 텍스트
    welcomeText: {
        fontSize: '32px',
        marginBottom: '45px',
        marginTop: '0px',
    },

    // 웰컴 밑의 로그인 텍스트
    loginTitle: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '8px',
    },

    //  로그인 텍스트 아래 회색 설명 텍스트
    loginDescription: {
        fontSize: '13px',
        color: '#888888',
        marginBottom: '30px',
    },

    // 학번을 입력하세요.
    loginForm: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    // 전체 적인 폼 스타일
    formLabel: {
        width: '100%',
        maxWidth: '400px',
        textAlign: 'left',
        fontWeight: 'normal',
        fontSize: '14px',
        marginBottom: '15px',
    },

    // 폼 안의 입력 칸
    formInput: {
        width: '100%',
        padding: '12px',
        marginTop: '7px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '7px',
        boxSizing: 'border-box',
    },

    // 비밀번호를 입력하세요
    passwordLabel: {
        position: 'relative',
    },

    // 비밀번호를 잊으셨나요?
    forgotPassword: {
        position: 'absolute',
        right: '0px',
        bottom: '-10px',
        color: '#006277',
        fontSize: '12px',
        fontWeight: 'bold',
        textDecoration: 'none',
    },

    // 회원가입 위의 버튼
    submitButton: {
        width: '100%',
        maxWidth: '400px',
        padding: '10px',
        backgroundColor: '#000000',
        color: '#ffffff',
        border: 'none',
        borderRadius: '7px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '30px',
        boxSizing: 'border-box',
    },

    // 회원가입 섹션 
    registerSection: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '35px',
        width: '100%',
    },

    // 회원가입 회색 선 스타일
    line: {
        width: '90px',
        height: '1px',
        backgroundColor: '#cccccc',
        margin: '0 10px',
    },

    // 아직도 회원이 아니신가요?
    registerText: {
        color: '#888888',
        fontSize: '12px',
    },

    // 회원가입
    registerLink: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#006277',
        marginLeft: '10px',
        textDecoration: 'none',
        ':hover': {
            textDecoration: 'none',
        },
    },

    // 에러 메시지 스타일
    errorMessage: {
        color: '#ff0000',
        fontSize: '14px',
        marginBottom: '15px',
        width: '100%',
        maxWidth: '400px',
        textAlign: 'left'
    }
});

export default Login;