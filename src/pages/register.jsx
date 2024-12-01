import { StyleSheet, css } from 'aphrodite';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/header';
import Template from '../components/template';
import Footer from '../components/footer';


const MICRO_DEGREES = [
    { value: "MD001", label: "스마트시티 마이크로디그리" },
    { value: "MD002", label: "재난안전소방 마이크로디그리" },
    { value: "MD003", label: "지속가능발전 마이크로디그리" },
    { value: "MD004", label: "AI리터러시 마이크로디그리" },
    { value: "MD005", label: "스마트기술창업 마이크로디그리" },
    { value: "MD006", label: "스포츠경영관리분석 마이크로디그리" },
    { value: "MD007", label: "디지털스포츠헬스케어 마이크로디그리" },
    { value: "MD008", label: "디지털영상콘텐츠 마이크로디그리" },
    { value: "MD009", label: "반도체공정및장비 마이크로디그리" },
    { value: "MD010", label: "의료AI시스템 마이크로디그리" }
];

const DEPARTMENTS = [
    { value: "030501", label: "의예과" },
    { value: "030502", label: "간호학과" },
    { value: "030503", label: "의학과" },
    { value: "030701", label: "국어교육과" },
    { value: "030702", label: "지리교육과" },
    { value: "030703", label: "가정교육과" },
    { value: "030704", label: "수학교육과" },
    { value: "030705", label: "체육교육과" },
    { value: "030706", label: "교육공학과" },
    { value: "030707", label: "컴퓨터교육과" },
    { value: "030708", label: "공통사회" },
    { value: "030709", label: "영어교육과" },
    { value: "030710", label: "역사교육과" },
    { value: "030790", label: "통합사회" },
    { value: "030799", label: "교직과" },
    { value: "031103", label: "관광경영학과" },
    { value: "031106", label: "호텔.관광학부" },
    { value: "031108", label: "스포츠건강관리학과" },
    { value: "031110", label: "호텔경영학과" },
    { value: "031112", label: "스포츠레저학과" },
    { value: "031113", label: "중국문화관광학과" },
    { value: "031160", label: "호텔관광외식학부" },
    { value: "031163", label: "스포츠지도학과" },
    { value: "03117004", label: "스포츠레저학부-사회체육학전공" },
    { value: "03117005", label: "스포츠레저학부-스포츠경영학전공" },
    { value: "031190", label: "글로벌의료관광학과" },
    { value: "031191", label: "스포테인먼트전공(F)" },
    { value: "031193", label: "조리외식경영학과" },
    { value: "03120202", label: "건축학부-건축공학" },
    { value: "03120203", label: "건축학부-건축학" },
    { value: "03120204", label: "건축학부-인테리어디자인" },
    { value: "031214", label: "토목공학과" },
    { value: "031217", label: "보건환경학과" },
    { value: "031224", label: "전자공학과" },
    { value: "031225", label: "정보통신공학과" },
    { value: "031226", label: "컴퓨터공학과" },
    { value: "031227", label: "에너지플랜트공학과" },
    { value: "031230", label: "소프트웨어학과" },
    { value: "031289", label: "데이터사이언스전공(F-C)" },
    { value: "031290", label: "경영공학과" },
    { value: "031291", label: "IT융합공학과" },
    { value: "031295", label: "AI융합전공(C)" },
    { value: "031297", label: "AI융합전공(F)" },
    { value: "031299", label: "반도체융합전공" },
    { value: "032302", label: "사회복지학과" },
    { value: "032303", label: "경영학과" },
    { value: "032305", label: "광고홍보학과" },
    { value: "032311", label: "무역학과" },
    { value: "032312", label: "경제금융학과" },
    { value: "032313", label: "경영정보학과" },
    { value: "03232001", label: "경찰행정학부-범죄수사학" },
    { value: "03232002", label: "경찰행정학부-경찰행정학" },
    { value: "03232003", label: "경찰행정학부-해양경찰" },
    { value: "032321", label: "행정학과" },
    { value: "032322", label: "법학과" },
    { value: "03260103", label: "공연예술학부-실용음악" },
    { value: "03260104", label: "공연예술학부-연기예술" },
    { value: "032605", label: "미디어콘텐츠학부" },
    { value: "032607", label: "시각디자인학과" },
    { value: "032609", label: "CG디자인학과" },
    { value: "032801", label: "임상병리학과" },
    { value: "032802", label: "치위생학과" },
    { value: "032803", label: "의료공학과" },
    { value: "032804", label: "의료IT학과" },
    { value: "032805", label: "의생명과학과" },
    { value: "032806", label: "의료경영학과" },
    { value: "032807", label: "의료뷰티케어학과" },
    { value: "032808", label: "바이오융합공학과" },
    { value: "032809", label: "안경광학과" },
    { value: "032891", label: "헬스케어융합전공" },
    { value: "032501", label: "항공운항서비스학과" },
    { value: "032506", label: "항공교통물류학과" },
    { value: "032510", label: "항공운항학과" },
    { value: "032515", label: "무인항공학과" },
    { value: "032520", label: "항공정비학과" }
];

function Register() {
    const location = useLocation();
    
    const [userData, setUserData] = useState({
        name: location.state?.studentInfo?.name || '',
        department: location.state?.studentInfo?.department || '',
        studentId: location.state?.studentInfo?.studentId || ''
    });

    const [selectedMajorType, setSelectedMajorType] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState('');
    const [selectedMicroDegree, setSelectedMicroDegree] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState('');

    const handleMajorTypeChange = (e) => {
        setSelectedMajorType(e.target.value);
        setSelectedDepartment('');
    };

    const handleDepartmentChange = (e) => {
        setSelectedDepartment(e.target.value);
    };

    const handleMicroDegreeChange = (e) => {
        setSelectedMicroDegree(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // 복수/부/연계전공 선택 시 학과 선택 필수 검사
        if (selectedMajorType && !selectedDepartment) {
            setError('추가 전공 학과를 선택해주세요.');
            return;
        }
        
        // 비밀번호 입력 여부 검사
        if (!password) {
            setError('FINISH LINE 회원가입을 위해 비밀번호를 설정해주세요.');
            return;
        }
        
        // 비밀번호 형식 검사 (영문 대/소문자, 숫자, 특수문자 포함 8~20자)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
        if (!passwordRegex.test(password)) {
            setError('비밀번호는 영문 대/소문자, 숫자, 특수문자를 포함하여 8~20자로 입력해주세요.');
            return;
        }
        
        // 비밀번호 일치 여부 검사
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await fetch('/api/register/', {  // Django API 엔드포인트
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userData.name,
                    department: userData.department,
                    studentId: userData.studentId,
                    majorType: selectedMajorType,
                    secondMajor: selectedDepartment,
                    microDegree: selectedMicroDegree,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error('회원가입에 실패했습니다.');
            }

            const data = await response.json();
            // 회원가입 성공 시 처리 (예: 로그인 페이지로 이동)
            window.location.href = '/login';
            
        } catch (error) {
            setError('회원가입 중 오류가 발생했습니다. 다시 시도해주세요.');
            console.error('회원가입 오류:', error);
        }
    };

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

                    <Link to="/completeLecture" className={css(styles.titleLink)}>
                        <h2 className={css(styles.sectionTitle)}>추가 정보 설정</h2>
                    </Link>
                    <div className={css(styles.inputGroup)}>
                        <label>복수/부/연계 전공</label>
                        <div className={css(styles.selectGroup)}>
                            <select 
                                className={css(styles.select, selectedMajorType && styles.selectedOption)}
                                onChange={handleMajorTypeChange}
                                value={selectedMajorType}
                            >
                                <option value="">해당 없음</option>
                                <option value="double">복수전공</option>
                                <option value="minor">부전공</option>
                                <option value="linked">연계전공</option>
                            </select>
                            <select 
                                className={css(styles.select, selectedDepartment && styles.selectedOption)}
                                onChange={handleDepartmentChange}
                                value={selectedDepartment}
                                disabled={!selectedMajorType}
                            >
                                {selectedMajorType ? (
                                    <>
                                        <option value="">선택</option>
                                        {DEPARTMENTS.map(dept => (
                                            <option key={dept.value} value={dept.value}>
                                                {dept.label}
                                            </option>
                                        ))}
                                    </>
                                ) : (
                                    <option value=""> </option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className={css(styles.inputGroup, styles.majorSpacing)}>
                        <label>소단위 전공</label>
                        <select 
                            className={css(styles.select, selectedMicroDegree && styles.selectedOption)}
                            onChange={handleMicroDegreeChange}
                            value={selectedMicroDegree}
                        >
                            <option value="">해당 없음</option>
                            {MICRO_DEGREES.map(degree => (
                                <option key={degree.value} value={degree.value}>
                                    {degree.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={css(styles.inputGroup, styles.passwordSpacing)}>
                        <label>비밀번호 설정</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="영문 대/소문자, 숫자, 특수문자 포함 (8~20자)" 
                            className={css(styles.input)} 
                        />
                    </div>
                    <div className={css(styles.inputGroup, styles.passwordConfirmSpacing)}>
                        <label>비밀번호 확인</label>
                        <input 
                            type="password" 
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            placeholder="영문 대/소문자, 숫자, 특수문자 포함 (8~20자)" 
                            className={css(styles.input)} 
                        />
                    </div>
                    <div className={css(styles.errorContainer)}>
                        {error && <div className={css(styles.errorMessage)}>{error}</div>}
                    </div>
                    <button 
                        onClick={handleSubmit} 
                        className={css(styles.submitButton)}
                    >
                        가입하기
                    </button>
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
    },
    firstSectionTitle: {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px',
        marginTop: '75px',
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
    majorSpacing: {
        marginTop: '30px',
    },
    passwordSpacing: {
        marginTop: '30px',
    },
    passwordConfirmSpacing: {
        marginTop: '30px',
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
        flexDirection: 'column',
        gap: '10px',
    },
    select: {
        width: '100%',
        padding: '12px',
        border: '1px solid #CACACA',
        borderRadius: '6px',
        fontSize: '15px',
        marginTop: '5px',
        backgroundColor: '#fff',
        color: '#7A828A',
        appearance: 'none',
        WebkitAppearance: 'none',
        MozAppearance: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%237A828A' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 16px center',
        paddingRight: '40px',
        ':focus': {
            outline: 'none',
            borderColor: '#006277',
            boxShadow: '0 0 0 1px #006277',
        }
    },
    submitButton: {
        padding: '9px 23px 8px 23px',
        backgroundColor: '#2B2A28',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        fontSize: '17px',
        fontWeight: 600,
        cursor: 'pointer',
        display: 'block',
        margin: '30px auto 0',
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
    },
    selectedOption: {
        color: '#2B2A28',
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%232B2A28' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
    },
    errorContainer: {
        height: '24px',
        minHeight: '24px',  // 최소 높이 추가
        marginTop: '10px',
        marginBottom: '10px'  // 아래 여백 추가
    },
    errorMessage: {
        color: '#FF4B4B',
        fontSize: '14px',
        textAlign: 'center'
    },
    titleLink: {
        textDecoration: 'none',
        ':hover': {
            cursor: 'pointer',
            opacity: 0.8
        }
    }
});

export default Register;