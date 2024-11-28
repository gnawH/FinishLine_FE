import { StyleSheet, css } from 'aphrodite';
import logo2 from '../assets/images/logo2.png';

function Template({ title }) {
    return (
        <div className={css(styles.templateContainer)}>
            <img src={logo2} alt="Finish Line Icon" className={css(styles.templateIcon)} />
            <h1 className={css(styles.templateText)}>{title}</h1>
        </div>
    );
}

const styles = StyleSheet.create({
    templateContainer: {
        fontFamily: 'Lato',
        color: '#2B2A28',
        textAlign: 'center',
    },
    templateIcon: {
        display: 'block',
        margin: '0 auto 0px',
        height: '100px',
    },
    templateText: {
        color: '#333',
        fontSize: '32px',
        marginTop: '7px',
    },
});

export default Template;