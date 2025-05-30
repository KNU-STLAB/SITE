import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

export default function ProfessorCard({
  name = "김연구 교수님",
  title = "소프트웨어공학부 총괄 교수",
  photoUrl,
  email = "professor@example.ac.kr",
  office = "공학관 501호",
  education = [
    "OO대학교 컴퓨터공학 박사",
    "XX대학교 컴퓨터공학 석사",
    "XX대학교 컴퓨터공학 학사"
  ],
  researchInterests = [
    "소프트웨어 테스팅 자동화",
    "정형 검증",
    "AI 기반 소프트웨어 공학",
    "임베디드 시스템 분석"
  ],
  labPageLink,
}) {
  const { withBaseUrl } = useBaseUrlUtils();

  const photoAreaStyle = photoUrl
    ? { backgroundImage: `url(${photoUrl.startsWith('http') ? photoUrl : withBaseUrl(photoUrl)})` } // 외부/내부 URL 처리
    : {
        backgroundImage: 'none',
        backgroundColor: 'var(--ifm-color-emphasis-200)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--ifm-color-emphasis-700)'
      };

  return (
    <div className={styles.professorCard}>
      <div
        className={styles.photoArea}
        style={photoAreaStyle}
        aria-label={`${name} 교수 사진 영역`}
      >
        {!photoUrl && <span className={styles.noPhotoText}>사진 없음</span>}
      </div>

      <div className={styles.infoSection}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.title}>{title}</p>
        <div className={styles.contactInfo}>
          {email && <p>📧 <a href={`mailto:${email}`} className={clsx('animatedLink')}>{email}</a></p>}
          {office && <p>🏢 {office}</p>}
          {labPageLink && (
          <div className={styles.labLinkButtonContainer}>
            <Link
              className={clsx('button button--primary button--sm', styles.labLinkButton)}
              to={labPageLink.startsWith('http') ? labPageLink : withBaseUrl(labPageLink)}
            >
              연구실 구성원 확인하기
            </Link>
          </div>
        )}
        </div>
        {education && education.length > 0 && (
          <div className={styles.detailSection}>
            <h4 className={styles.detailTitle}>학력</h4>
            <ul>
              {education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
        )}

        {researchInterests && researchInterests.length > 0 && (
          <div className={styles.detailSection}>
            <h4 className={styles.detailTitle}>주요 연구 분야</h4>
            <ul className={styles.interestsList}>
              {researchInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}