/* eslint-disable react/prop-types */
import React from 'react';
import { pageLinks } from '../data';
import PageLink from './PageLink';

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    // <ul className={parentClass} id={itemClass}>
    <ul className={parentClass}>
      {pageLinks.map((link) => {
        return (
          <PageLink
            key={link.id}
            href={link.href}
            text={link.text}
            linkCssClass={itemClass}
            // linkCssClass="nav-link"
          />
        );
      })}
    </ul>
  );
};

export default PageLinks;

// return (
//   <li key={link.id}>
//     <a href={link.href} className="nav-link">
//       {link.text}
//     </a>
//   </li>
// );
