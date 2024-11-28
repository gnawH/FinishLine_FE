import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import Header from '../components/header'; // Header 컴포넌트 
import Template from '../components/template'; // Template 컴포넌트 import
import Footer from '../components/footer'; // Footer 컴포넌트 import
import ckuWhiteLogo from '../assets/images/ckuWhiteLogo.png'; // 학교 로고 이미지 import


function Policy() {
    return (
        <div className={css(styles.policyContainer)}>
            <Header />
            <Template title="회원가입" />
            <span className={css(styles.policyDescription)}>
                졸업요건 검사 서비스 이용을 위해 약관 동의와 학생 인증이 필요합니다.        
            </span>
            <main className={css(styles.contentContainer)}>
                <div className={css(styles.termsSection)}>
                    <h3 className={css(styles.sectionTitle)}>이용약관 및 개인정보처리방침</h3>
                    <div className={css(styles.termsBox)}>
                        <h4>이용약관</h4>
                        <span>1. 학생 인증시 입력한 비밀번호는  학생 인증 시에만 사용되며 저장되지 않습니다.</span><br />
                        <span>2. 기이수 과목 등록시 첨부한 PDF는 평점을 제외한 강의에 대한 텍스트 정보만을 추출하여 저장됩니다.</span><br />
                        
                        <h4>개인정보처리방침</h4>
                        <span>제 1조 (수집하는 개인정보 항목)</span><br />
                        <span>본 사이트는 회원가입 및 학생 인증을 위해 다음과 같은 개인정보를 수집합니다.</span><br />
                        <span>- 이름, 학과, 학번</span><br />
                        <span>- 가톨릭관동대학교 포털 아이디 및 비밀번호 (인증 후 저장되지 않음)</span>
                    </div>
                    <div className={css(styles.checkboxContainer)}>
                        <input type="checkbox" id="termsAgree" />
                        <label htmlFor="termsAgree">이용약관 및 개인정보처리방침에 동의합니다.</label>
                    </div>
                </div>

                <div className={css(styles.authSection)}>
                    <h3 className={css(styles.sectionTitle)}>학생 인증</h3>
                    <div className={css(styles.authBox)}>
                        <img src={ckuWhiteLogo} alt="학생인증 학교 로고" className={css(styles.schoolLogo)} />
                        <p className={css(styles.authGuide)}>가톨릭관동대학교 포털 아이디와 비밀번호로 입력해주세요.</p>
                        <div className={css(styles.inputGroup)}>
                            <p className={css(styles.inputLabel)}>아이디</p>
                            <input
                                type="text"
                                placeholder="아이디를 입력하세요."
                                className={css(styles.input)}
                            />
                        </div>
                        <div className={css(styles.inputGroup)}>
                            <p className={css(styles.inputLabel)}>비밀번호</p>
                            <input
                                type="password"
                                placeholder="비밀번호를 입력하세요."
                                className={css(styles.input)}
                            />
                        </div>
                        <button className={css(styles.authButton)}>재학생 인증</button>
                        <p className={css(styles.authNotice)}>
                            <b>교직, 편압학 대상자</b>에 해당하는 졸업요건은 반영되지 않아 회원가입이 불가합니다.
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
                   
const styles = StyleSheet.create({
    policyContainer: {
        fontFamily: 'Lato',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFEFB',
    },
    policyDescription: {
        fontSize: '15px',
        color: '#7A828A',
        marginBottom: '8px',
        textAlign: 'center',
    },
    contentContainer: {
        padding: '60px',
        paddingLeft: '266px',
        paddingRight: '266px',
    },
    termsSection: {
        marginBottom: '75px',
    },
    sectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '13px',
    },
    termsBox: {
        border: '1px solid #CACACA',
        padding: '20px',
        paddingTop: '5px',
        borderRadius: '6px',
        color: '#2B2A28',
        fontSize: '13px',
    },
    checkboxContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '12px',
        color: '#2B2A28',
        fontSize: '15px',
        gap: '5px',
    },
    authSection: {
        marginTop: '20px',
    },
    authBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '10px',
        borderRadius: '5px',
    },
    schoolLogo: {
        width: '180px',
        height: '180px',
        marginBottom: '10px',
    },
    authGuide: {
        fontSize: '15px',
        color: '#7A828A',
        marginBottom: '20px',
    },
    inputGroup: {
        width: '45%',
        textAlign: 'left',
        marginBottom: '10px',
    },
    inputLabel: {
        fontSize: '14px',
        color: '#2B2A28',
        marginBottom: '5px',
    },
    input: {
        width: '100%',
        padding: '12px',
        border: '1px solid #CACACA',
        borderRadius: '6px',
        fontSize: '15px',
        color: '#7A828A',
        backgroundColor: '#FFFFFF',
        ':focus': {
        outline: 'auto 1px',                    // 기본 두께
        outlineColor: '#006277',      // Chrome 기본 파란색
        outlineStyle: 'auto',                   // 기본 스타일
        outlineOffset: '0px',                   // 테두리와의 간격
        borderColor: '#006277',       // 테두리 색상도 함께 변경
        boxShadow: '0 0 0 1px rgb(59, 153, 252)' // 약간의 그림자 효과
    }
    },
    authButton: {
        width: '48%',
        padding: '12px',
        marginTop: '30px',
        marginLeft: '26px',
        backgroundColor: '#FFFEFB',
        fontWeight: 'bold',
        fontSize: '15px',
        color: '#2B2A28',
        border: '2px solid #2B2A28',
        borderRadius: '10px',
        cursor: 'pointer',
    },
    authNotice: {
        fontSize: '15px',
        color: '#006277',
        marginTop: '10px',
        marginLeft: '26px',
    },
});

export default Policy;