import { StyleSheet, css } from 'aphrodite';
import Header from '../components/header';
import Template from '../components/template';
import Footer from '../components/footer';
import UploadPDF from '../components/uploadPDF';
import LectureTable from '../components/lectureTable';

function MyCompleteLecture() {
    return (
        <div className={css(styles.myCompleteLectureContainer)}>
            <Header />
            <Template title="기이수과목 관리" />
            <div className={css(styles.container)}>
                <div className={css(styles.titleContainer)}>
                    <h2 className={css(styles.title)}>과목 직접 추가</h2>
                    <hr className={css(styles.divider)} />
                    <div className={css(styles.subTitle)}>과목 코드로 검색</div>
                    <div className={css(styles.searchContainer)}>
                        <input
                            type="text"
                            placeholder="과목 코드를 입력하세요"
                            className={css(styles.searchInput)}
                        />
                        <button className={css(styles.searchButton)}>검색</button>
                    </div>
                    <LectureTable />
                </div>
            </div>
            <div className={css(styles.container)}>
                <div className={css(styles.titleContainer)}>
                    <h2 className={css(styles.title)}>내 기이수과목</h2>
                    <hr className={css(styles.divider)} />
                </div>
                <div className={css(styles.uploadContainer)}>
                    <div className={css(styles.fileInputWrapper)}>
                    <LectureTable />
                    </div>
                </div>
            </div>
            <UploadPDF />
            <Footer />
        </div>
    );
}

const styles = StyleSheet.create({
    myCompleteLectureContainer: {
        fontFamily: 'Lato',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#FFFEFB',
    },
    container: {
        width: '100%',
        maxWidth: '550px',
        margin: '50px auto 0',
    },
    titleContainer: {
        marginBottom: '40px',
    },
    title: {
        fontSize: '25px',
        fontWeight: 600,
        color: '#000000',
        marginBottom: '15px',
    },
    divider: {
        border: 'none',
        height: '1px',
        backgroundColor: '#E4E4E4',
        marginBottom: '23px',
    },
    uploadContainer: {
        display: 'flex',
        gap: '10px',
        marginBottom: '20px',
        alignItems: 'flex-end',
    },
    fileInputWrapper: {
        flex: 1,
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
    },
    fileNameInput: {
        flex: 1,
        minHeight: '30px',
        height: 'auto',
        padding: '0 13px',
        border: '1px solid #CACACA',
        borderRadius: '6px',
        fontSize: '13px',
        color: '#7A828A',
        backgroundColor: '#F6F6F6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '8px',
        wordBreak: 'break-all',
    },
    fileSelectButton: {
        padding: '3px 9px',
        backgroundColor: 'rgba(90, 87, 87, 0.81)',
        border: '1px solid #CACACA',
        borderRadius: '6px',
        cursor: 'pointer',
        fontSize: '11px',
        fontWeight: 600,
        display: 'flex',
        alignItems: 'center',
        color: '#FFFEFB',
        flexShrink: 0,
        marginLeft: 'auto',
        ':hover': {
            backgroundColor: 'rgba(90, 87, 87, 0.50)',
        }
    },
    hiddenFileInput: {
        display: 'none',
    },
    uploadButton: {
        maxHeight: '33px',
        padding: '9px 20px',
        backgroundColor: '#fff',
        color: '#2B2A28',
        border: '1px solid #2B2A28',
        borderRadius: '4px',
        cursor: 'pointer',
        fontWeight: 600,
        fontSize: '13px',
        alignSelf: 'flex-end',
        ':hover': {
            backgroundColor: '#444444',
            color: '#FFFEFB',
        }
    },
    notice: {
        fontSize: '13px',
        color: '#006277',
        lineHeight: '1.5',
        width: '105%',
        marginBottom: '100px',
        cursor: 'pointer',
        ':hover': {
            textDecoration: 'underline',
        }
    },
    inputLabel: {
        fontSize: '18px',
        fontWeight: 600,
        color: '#2B2A28',
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px',
    },
    subTitle: {
        fontSize: '20px',
        fontWeight: 600,
        color: '#006277',
        textAlign: 'center',
        marginTop: '23px',
    },
    searchContainer: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
        marginTop: '20px',
        marginBottom: '40px',
    },
    searchInput: {
        width: '424px',
        height: '46px',
        padding: '0 15px',
        border: '1px solid #CACACA',
        borderRadius: '6px',
        fontSize: '15px',
        color: '#7A828A',
        '::placeholder': {
            color: '#7A828A',
        },
        ':focus': {
            outline: 'none',
            borderColor: '#006277',
            boxShadow: '0 0 0 1px #006277',
        }
    },
    searchButton: {
        padding: '0 26px',
        height: '46px',
        backgroundColor: '#FFFEFB',
        color: '#2B2A28',
        border: '1px solid #2B2A28',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '15px',
        fontWeight: 600,
        ':hover': {
            backgroundColor: '#2B2A28',
            color: '#FFFEFB',
        }
    },
});

export default MyCompleteLecture;