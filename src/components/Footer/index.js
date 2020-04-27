import React from 'react';
import {  FaInstagram, FaWhatsapp } from 'react-icons/fa';
import {GiTriangleTarget} from 'react-icons/gi'

import { Footer, SocialMedias } from './styles';

export default function _Footer() {
  return (
    <Footer >
        <div>Triangle</div>
        <SocialMedias>
                <FaInstagram />
                <FaWhatsapp />
                <GiTriangleTarget />
        </SocialMedias>
    </Footer>
  );
}
