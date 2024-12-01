import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

function UploadPDF() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        const totalFiles = selectedFiles.length + files.length;
        
        if (totalFiles > 25) {
            alert('최대 25개의 파일만 첨부 가능합니다.');
            return;
        }

        if (files.length > 0) {
            setSelectedFiles(prevFiles => [...prevFiles, ...files]);
            setFileNames(prevNames => [...prevNames, ...files.map(file => file.name)]);
        }
    };

    const handleUpload = async () => {
        if (selectedFiles.length === 0) {
            alert('파일을 선택해주세요.');
            return;
        }

        const formData = new FormData();
        selectedFiles.forEach((file, index) => {
            formData.append('files', file);
        });

        try {
            const response = await fetch('/api/upload-pdf', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('파일 업로드에 실패했습니다.');
            }

            alert('파일이 성공적으로 업로드되었습니다.');
            setSelectedFiles([]);
            setFileNames([]);
        } catch (error) {
            console.error('업로드 에러:', error);
            alert('파일 업로드 중 오류가 발생했습니다.');
        }
    };

    const handleDeleteFile = (index) => {
        setSelectedFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
        setFileNames(prevNames => prevNames.filter((_, i) => i !== index));
    };

    return (
        <div className={css(styles.container)}>
            <div className={css(styles.titleContainer)}>
                <h2 className={css(styles.title)}>기이수과목 등록</h2>
                <hr className={css(styles.divider)} />
            </div>
            <div className={css(styles.uploadContainer)}>
                <div className={css(styles.fileInputWrapper)}>
                    <label className={css(styles.inputLabel)}>파일 선택</label>
                    <div className={css(styles.fileNameInput)}>
                        {fileNames.length > 0 ? (
                            <div className={css(styles.fileList)}>
                                {fileNames.map((name, index) => (
                                    <div key={index} className={css(styles.fileItem)}>
                                        <span className={css(styles.fileName)}>{name}</span>
                                        <button
                                            onClick={() => handleDeleteFile(index)}
                                            className={css(styles.deleteButton)}
                                            type="button"
                                        >
                                            ×
                                        </button>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className={css(styles.emptyState)}>
                                <span>파일을 선택해주세요. (최대 25장)</span>
                            </div>
                        )}
                        {selectedFiles.length < 25 && (
                            <label className={css(styles.fileSelectButton)}>
                                파일 업로드
                                <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={handleFileChange}
                                    className={css(styles.hiddenFileInput)}
                                    multiple
                                />
                            </label>
                        )}
                    </div>
                </div>
                <button
                    onClick={handleUpload}
                    className={css(styles.uploadButton)}
                >
                    등록하기
                </button>
            </div>
            <div className={css(styles.notice)}>
            <b>가톨릭관동대학교 포털 &gt; 로그인 &gt; 종합정보시스템 &gt; 학적관리 &gt; 학기별 성적조회 및 출력 &gt; 인쇄 &gt; PDF로 저장</b><br></br>
            계절학기 포함 모든 학기 PDF를 첨부해주세요.
            </div>
        </div>
    );
}

const styles = StyleSheet.create({
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
        color: '#2B2A28',
        marginBottom: '15px',
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
    },
    divider: {
        border: 'none',
        height: '1px',
        backgroundColor: '#E4E4E4',
        marginBottom: '15px',
    },
    inputLabel: {
        fontSize: '18px',
        fontWeight: 600,
        color: '#2B2A28',
        display: 'flex',
        alignItems: 'center',
        marginRight: '10px',
    },
    fileList: {
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        width: 'calc(100% - 80px)',
        margin: '8px 0',
    },
    fileItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '5px 8px',
        borderRadius: '4px',
        border: '1px solid #EAEAEA',
    },
    fileName: {
        fontSize: '12px',
        color: '#2B2A28',
        marginRight: '10px',
    },
    deleteButton: {
        background: 'none',
        border: 'none',
        color: '#FF4444',
        cursor: 'pointer',
        fontSize: '16px',
        padding: '0 5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ':hover': {
            color: '#FF0000',
        }
    },
    emptyState: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        height: '30px',
    },
});

export default UploadPDF;
