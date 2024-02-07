/* eslint-disable react/prop-types */

const PageLink = (props) => {
  return (
    <li>
      <a href={props.href} className={props.linkCssClass}>
        {props.text}
      </a>
    </li>
  );
};

export default PageLink;
