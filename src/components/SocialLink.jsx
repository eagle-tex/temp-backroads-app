/* eslint-disable react/prop-types */

const SocialLink = ({ href, icon, linkCssClass }) => {
  return (
    <li>
      <a href={href} target="_blank" className={linkCssClass} rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};

export default SocialLink;
