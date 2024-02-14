import React from "react";
import { NavLink } from "react-router-dom";
import { WEB_TEXT } from "../Utils/constants";
const {
  HOME_MENU_TITLE,
  ABOUT_MENU_TITLE,
  EXPERIENCE_MENU_TITLE,
  BLOG_MENU_TITLE,
  CONTACT_MENU_TITLE,
} = WEB_TEXT;

export const NavHeader = () => (
  <div>
    <header>
        <NavLink to="/">{HOME_MENU_TITLE}</NavLink>
        <NavLink to="about">{ABOUT_MENU_TITLE}</NavLink>
        <NavLink to="experience">{EXPERIENCE_MENU_TITLE}</NavLink>
        <NavLink to="blog">{BLOG_MENU_TITLE}</NavLink>
        <NavLink to="contact">{CONTACT_MENU_TITLE}</NavLink>
    </header>
  </div>
);
