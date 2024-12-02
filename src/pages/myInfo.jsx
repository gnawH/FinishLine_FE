import { StyleSheet, css } from 'aphrodite';
import UserHeader from '../components/userHeader'; // Header 컴포넌트 
import Template from '../components/template'; // Template 컴포넌트 import
import Footer from '../components/footer'; // Footer 컴포넌트 import

function MyInfo() {
    return (
        <div className={css(styles.myInfoContainer)}>
            <UserHeader />
            <Template title="마이페이지" />
            <Footer />
        </div>
    );
}

const styles = StyleSheet.create({
    myInfoContainer: {
        fontFamily: 'Lato',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFEFB',
    },
});

export default MyInfo;