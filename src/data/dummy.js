import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiCreditCard} from 'react-icons/fi';
import { BsKanban, BsCurrencyDollar, BsShield} from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine} from 'react-icons/ri';

export const links = [
  {
   
    links: [
      {
        name: 'Shop',
        icon: <FiShoppingBag />,
      },
      {
        name: 'orders',
        icon: <AiOutlineShoppingCart />,
      },
      {
        name: 'People',
        icon: <IoMdContacts />,
      },
      {
        name: 'customers',
        icon: <RiContactsLine />,
      },
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
      {
        name: 'Tasks',
        icon: <BsKanban />,
      },
      {
        name: 'Notes',
        icon: <FiEdit />,
      },
      {
        name: 'color',
        icon: <BiColorFill />,
      },
    ],
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];