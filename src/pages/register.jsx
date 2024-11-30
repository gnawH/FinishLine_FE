import { StyleSheet, css } from 'aphrodite';
import Header from '../components/header';
import Template from '../components/template';
import Footer from '../components/footer';
import { useState, useEffect } from 'react';

function Register() {
    const [userData, setUserData] = useState({
        name: '홍길동',
        department: '소프트웨어학과',
        studentId: '20240000'
    });

    useEffect(() => {
        // API 호출 예시
        const fetchUserData = async () => {
            try {
                const response = await fetch('/api/user-info');  // API 엔드포인트는 실제 경로로 수정 필요
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error('사용자 정보를 가져오는데 실패했습니다:', error);
            }
        };

        fetchUserData();
    }, []);

    return (
        <div className={css(styles.registerContainer)}>
            <Header />
            <Template title="회원가입" />
            <span className={css(styles.registerDescription)}>
                졸업요건 검사 서비스 이용을 위해 약관 동의와 학생 인증이 필요합니다.        
            </span>
            <main className={css(styles.mainContent)}>
                <div className={css(styles.formSection)}>
                    <h2 className={css(styles.firstSectionTitle)}>기본 정보 확인</h2>
                    <div className={css(styles.inputGroup)}>
                        <label>이름</label>
                        <input 
                            type="text" 
                            value={userData.name}
                            readOnly
                            className={css(styles.input, styles.readOnlyInput)} 
                        />
                    </div>
                    <div className={css(styles.inputGroup)}>
                        <label>학과</label>
                        <input 
                            type="text" 
                            value={userData.department}
                            readOnly
                            className={css(styles.input, styles.readOnlyInput)} 
                        />
                    </div>
                    <div className={css(styles.inputGroup)}>
                        <label>학번</label>
                        <input 
                            type="text" 
                            value={userData.studentId}
                            readOnly
                            className={css(styles.input, styles.readOnlyInput)}
                        />
                    </div>

                    <h2 className={css(styles.sectionTitle)}>추가 정보 설정</h2>
                    <div className={css(styles.inputGroup)}>
                        <label>복수/부/연계 전공</label>
                        <div className={css(styles.selectGroup)}>
                            <select className={css(styles.select)}>
                                <option value="">해당 없음</option>
                                <option value="double">복수전공</option>
                                <option value="minor">부전공</option>
                                <option value="linked">연계전공</option>
                            </select>
                            <select className={css(styles.select)}>
                                <option value=""> </option>
                            </select>
                        </div>
                    </div>
                    <div className={css(styles.inputGroup)}>
                        <label>소단위 전공</label>
                        <select className={css(styles.select)}>
                            <option value="">해당 없음</option>
                        </select>
                    </div>
                    <div className={css(styles.inputGroup)}>
                        <label>비밀번호 설정</label>
                        <input 
                            type="password" 
                            placeholder="영 대/소문자, 숫자, 특수문자 포함 (8~20자)" 
                            className={css(styles.input)} 
                        />
                    </div>
                    <div className={css(styles.inputGroup)}>
                        <label>비밀번호 확인</label>
                        <input 
                            type="password" 
                            placeholder="영문 대/소문자, 숫자, 특수문자 포함 (8~20자)" 
                            className={css(styles.input)} 
                        />
                    </div>
                    <button className={css(styles.submitButton)}>가입하기</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

const styles = StyleSheet.create({
    registerContainer: {
        fontFamily: 'Lato',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFEFB',
    },
    registerDescription: {
        fontSize: '15px',
        color: '#7A828A',
        textAlign: 'center',
    },
    mainContent: {
        flex: 1,
        padding: '0 460px',
        marginBottom: '50px',
    },
    formSection: {
        maxWidth: '800px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    },
    firstSectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
        marginTop: '30px',
        color: '#2B2A28',
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
        marginTop: '66px',
        color: '#2B2A28',
        textAlign: 'center'
    },
    inputGroup: {
        marginBottom: '20px',
        fontSize: '14px',
        fontWeight: 600,
    },
    input: {
        width: '100%',
        padding: '12px',
        border: '1px solid #CACACA',
        borderRadius: '6px',
        fontSize: '15px',
        fontWeight: 'normal',
        marginTop: '5px',
        boxSizing: 'border-box',
        ':focus': {
            outline: 'none',
            borderColor: '#006277',
            boxShadow: '0 0 0 1px #006277',
        }
    },
    selectGroup: {
        display: 'flex',
        gap: '10px',
    },
    select: {
        flex: 1,
        padding: '12px',
        border: '1px solid #CACACA',
        borderRadius: '6px',
        fontSize: '15px',
        marginTop: '5px',
        backgroundColor: '#fff',
        ':focus': {
            outline: 'none',
            borderColor: '#006277',
            boxShadow: '0 0 0 1px #006277',
        }
    },
    submitButton: {
        width: '100%',
        padding: '12px',
        backgroundColor: '#2B2A28',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        marginTop: '30px',
        ':hover': {
            backgroundColor: '#444',
        }
    },
    readOnlyInput: {
        backgroundColor: '#F6F6F6',
        color: '#7A828A',
        outline: 'none',
        ':focus': {
            outline: 'none',
            borderColor: '#CACACA',
            boxShadow: 'none'
        }
    }
});

export default Register;