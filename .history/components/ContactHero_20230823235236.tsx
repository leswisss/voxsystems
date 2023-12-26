"use client";

import React, {useEffect, useState} from 'react'
import { useRouter } from 'next/navigation';
import Image from 'next/image'
import { VoxContact } from '.';
import { ContactSelection } from '@/utils';
import { ContactSelectionProps } from '@/types';
import IMAGE from "../public/images/contactimage.jpg"
import "../styles/contact.scss"

const ContactHero = () => {
  const [activeContact, setActiveContact] = useState(0);
  const router = useRouter();

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import ('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  const handleClick = (i: number) => {
    setActiveContact(i)
    updateSearchParams(ContactSelection[activeContact].slug)
  }

  const getActiveEmail = () => {
    const activeEmail = ContactSelection[activeContact].mail;

    return(activeEmail)
  }

  const updateSearchParams = (service: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (service) {
      searchParams.set("service", service)
    } else {
      searchParams.delete("service")
    }

    const newPathName = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathName)
  }

  useEffect(() => {
    updateSearchParams(ContactSelection[activeContact].slug)
  })
  

  return (
    <section className="contact__hero">
      <div className="contact__image">
        <Image src={IMAGE} alt="Contact Background" fill={true} sizes='(max-width: 600px) 100%, 100%' />
      </div>
      <div className="selection__box">
        {
          ContactSelection.map((item, i) => (
            <span key={`sb-${i}`} onClick={() => handleClick(i)} className={activeContact===i ? "active-span" : ""}>{item.name} CONTACT</span>
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