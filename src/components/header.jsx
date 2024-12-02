import { useState } from 'react'
import { StyleSheet, css } from 'aphrodite';
import { useNavigate, Link, useLocation } from 'react-router-dom'; // React Router의 Link 컴포넌트 import
import Modal from '../components/modal/loginService'; // 모달 컴포넌트 import
import logo1 from '../assets/images/logo1.png';

// Header 컴포넌트
function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLoginClick = () => {
        navigate('/login');
        window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
    };

    return (
        <header className={css(styles.header)}>
             <Link to="/userGuide">
                <img src={logo1} alt="Logo" className={css(styles.logo)} />
            </Link>


            {/* 네비게이션 및 로그인 버튼 */}
            <div className={css(styles.headerLinks)}>
                <nav className={css(styles.navLinks)}>
                    <Link
                        to="/userGuide"
                        className={css(
                            styles.navLink,
                            location.pathname === '/userGuide' && styles.activeNavLink // 현재 경로가 '/userGuide'일 때 스타일 추가
                        )}
                    >
                        이용 가이드
                    </Link>
                    <span
                        className={css(styles.navLink)}
                        onClick={openModal} // 모달 열기
                    >
                        졸업 요건 검사
                    </span>
                    <span
                        className={css(styles.navLink)}
                        onClick={openModal} // 모달 열기
                    >
                        기이수 과목 관리
                    </span>
                </nav>
                <button
                    className={css(styles.loginButton)}
                    onClick={handleLoginClick} // alert 대신 handleLoginClick 함수 사용
                >
                    로그인
                </button>
            </div>

            {/* 모달 컴포넌트 */}
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    );
}

// 스타일 정의
const styles = StyleSheet.create({
    // 헤더 컨테이너 스타일
    header: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '50px',
    },

    // 로고 스타일
    logo: {
        height: '110px',
        width: 'auto',
        marginTop: '10%',
        marginRight: 'auto',
        padding: '0 60px',
    },

    // 헤더 링크 섹션 스타일
    headerLinks: {
        display: 'flex',
        alignItems: 'center',
        gap: '65px',
        marginTop: '2%',
        padding: '0 90px',
    },
    activeNavLink: {
        fontWeight: 'bold', // 볼드 효과
    },

    // 네비게이션 링크 스타일
    navLinks: {
        display: 'flex',
        gap: '50px',
        alignItems: 'center',
    },

    // 헤더 이용가이드, 졸업요건 검사, 기이수 과목관리, 로그인버튼 
    navLink: {
        textDecoration: 'none',
        color: '#2B2A28',
        fontFamily: 'Lato, sans-serif',
        cursor: 'pointer', // 클릭 가능 스타일
    },

    // 로그인 버튼 스타일
    loginButton: {
        backgroundColor: '#2B2A28',
        color: '#ffffff',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        borderRadius: '10px',
    },
});

export default Header;