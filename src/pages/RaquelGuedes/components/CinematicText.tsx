import React from 'react';

interface CinematicTextProps {
  label?: string;
  title?: string;
  titleGold?: boolean;
  titleItalic?: boolean;
  titleSmall?: boolean;
  subtitle?: string;
  subtitleItalic?: boolean;
  quote?: string;
  paragraph?: string;
  className?: string;
}

const CinematicText: React.FC<CinematicTextProps> = ({
  label,
  title,
  titleGold = false,
  titleItalic = false,
  titleSmall = false,
  subtitle,
  subtitleItalic = false,
  quote,
  paragraph,
  className = '',
}) => {
  const titleClasses = [
    'rq-title',
    titleGold && 'rq-title--gold',
    titleItalic && 'rq-title--italic',
    titleSmall && 'rq-title--small',
  ]
    .filter(Boolean)
    .join(' ');

  const subtitleClasses = [
    'rq-subtitle',
    subtitleItalic && 'rq-subtitle--italic',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`rq-scene__content ${className}`}>
      {label && <span className="rq-label">{label}</span>}

      {title && <h2 className={titleClasses}>{title}</h2>}

      {subtitle && <p className={subtitleClasses}>{subtitle}</p>}

      {quote && <blockquote className="rq-quote">{quote}</blockquote>}

      {paragraph && <p className="rq-paragraph">{paragraph}</p>}
    </div>
  );
};

export default CinematicText;
