import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import Header from '../components/header'; // Header 컴포넌트 import
import Footer from '../components/footer'; // Footer 컴포넌트 import
import logo2 from '../assets/images/logo2.png'; // 로고 이미지 import

// Login 컴포넌트
function Login() {
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
                <form className={css(styles.loginForm)}>
                    <label className={css(styles.formLabel)}>
                        학번
                        <input
                            type="text"
                            placeholder="학번을 입력하세요."
                            className={css(styles.formInput)}
                        />
                    </label>
                    <label className={css(styles.formLabel, styles.passwordLabel)}>
                        비밀번호
                        <input
                            type="password"
                            placeholder="비밀번호를 입력하세요."
                            className={css(styles.formInput)}
                        />
                        <a href="비밀번호 분실실" className={css(styles.forgotPassword)}>비밀번호를 잊으셨나요?</a>
                    </label>
                    <button type="중앙 로그인 버튼" className={css(styles.submitButton)}>로그인</button>
                </form>

                {/* 회원가입 섹션 */}
                <div className={css(styles.registerSection)}>
                    <div className={css(styles.line)}></div>
                    <span className={css(styles.registerText)}>아직 회원이 아니신가요?</span>
                    <Link to="/policy" className={css(styles.registerLink)}>회원가입</Link>
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
});

export default Login;