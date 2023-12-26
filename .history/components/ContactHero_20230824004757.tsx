"use client";

import React, {useEffect, useState} from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image'
import { VoxContact } from '.';
import { ContactSelection } from '@/utils';
import Link from 'next/link';
import { ContactSelectionProps } from '@/types';
import IMAGE from "../public/images/contactimage.jpg"
import "../styles/contact.scss"

const ContactHero = () => {
  const [activeContact, setActiveContact] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams()
  const service = searchParams.get('service')

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  // const handleClick = (i: number) => {
  //   setActiveContact(i)
  //   // updateSearchParams(ContactSelection[activeContact].slug)
  // }

  const getActiveEmail = () => {
    const index = ContactSelection.findIndex(item => item.slug === service);
    const activeEmail = ContactSelection[index].mail;

    return(activeEmail)
  }
  

  return (
    <section className="contact__hero">
      <div className="contact__image">
        <Image src={IMAGE} alt="Contact Background" fill={true} sizes='(max-width: 600px) 100%, 100%' />
      </div>
      <div className="selection__box">
        {
          ContactSelection.map((item, i) => (
            <Link href={`/contacts?service=${item.slug}`} key={`sb-${i}`} className={service===item.slug ? "active-span" : ""}>{item.name} CONTACT</Link>
          ))
        }
      </div>
      <div className="chero__contact">
        <VoxContact email={getActiveEmail()}/>
      </div>
    </section>
  )
}

export default ContactHero