import { StyleSheet, css } from 'aphrodite';
import Header from '../components/header';
import Template from '../components/template';
import Footer from '../components/footer';
import UploadPDF from '../components/uploadPDF';

function CompleteLecture() {
    return (
        <div className={css(styles.completeLectureContainer)}>
            <Header />
            <Template title="기이수과목 관리" />
            <UploadPDF />
            <Footer />
        </div>
    );
}

const styles = StyleSheet.create({
    completeLectureContainer: {
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

export default CompleteLecture;