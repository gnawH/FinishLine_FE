import { StyleSheet, css } from 'aphrodite';
import Header from '../components/header'; // Header 컴포넌트 
import Template from '../components/template'; // Template 컴포넌트 import
import Footer from '../components/footer'; // Footer 컴포넌트 import

function MyInfo() {
    return (
        <div className={css(styles.myInfoContainer)}>
            <Header />
            <Template title="내 정보" />
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