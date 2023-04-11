import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import KoinosLogo from '../components/KoinosLogo'
import OutlineButton from '../components/OutlineButton'
import SolidButton from '../components/SolidButton'
import Navbar from '../components/Navbar'
import Dropdown from '../components/Dropdown'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Link from '../components/Link'
import VerticalComponent from '../components/VerticalComponent'
import HorizontalComponent from '../components/HorizontalComponent'
import Input from '../components/Input'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Koinos NextJS Brand Kit</title>
        <link rel='icon' href='https://koinos.io/wp-content/uploads/2021/10/cropped-koinos-mark-square-1024px-32x32.png' />
      </Head>
      <main className='flex flex-row flex-wrap'>
      <Navbar>
        <Dropdown title='Dropdown'>
          <a>Link</a>
          <a>Link</a>
        </Dropdown>
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
        <a>Link</a>
      </Navbar>
      </main>
      <Banner>
        <div className='inline-flex flex-wrap gap-2 text-2xl'>
            <p>Koinos is the world's first </p>
            <p className='text-yellow font-bold'>FREE-TO-USE</p>
            <p>blockchain.</p>
            <p>This is a composable UI Kit for Koinos developers built with Tailwind CSS.</p>
          </div>
      </Banner>
      <main className='flex flex-row flex-wrap'>
        <div className='w-full md:w-1/2'>
          <p className='text-2xl font-bold'>Koinos Logo Component Sizes:</p>
          <p>size=xs</p>
          <KoinosLogo size='xs' />
          <p className='text-sm'>size=sm</p><KoinosLogo size='sm' />
          <p className='text-md'>size=md</p><KoinosLogo size='md' />
          <p className='text-lg'>size=lg</p><KoinosLogo size='lg' />
          <p className='text-xl'>size=xl</p><KoinosLogo size='xl' />
          <p className='text-xxl'>size=xxl</p><KoinosLogo size='xxl' />
          default - full<KoinosLogo />
        </div>
        <div className='w-full md:w-1/2 h-fit flex flex-col gap-4'>
          <p className='text-2xl font-bold'>Color Palette</p>
          <div className='w-fit inline-flex border-4 border-black rounded-2xl'>
            <div className='w-24 flex items-center justify-center rounded-tl-xl rounded-bl-xl text-white h-24 bg-purple'>#7d18f7</div>
            <div className='w-24 flex items-center justify-center text-white h-24 bg-darkPurple'>#10031f</div>
            <div className='w-24 flex items-center justify-center h-24 text-white bg-gray'>#685f71</div>
            <div className='w-24 flex items-center justify-center h-24 text-white bg-yellow'>#deb37d</div>
            <div className='w-24 flex items-center justify-center rounded-tr-xl rounded-br-xl h-24 bg-offWhite'>#f9f9f9</div>
          </div>
          <p className='text-2xl font-bold'>Vertical Component</p>
            <VerticalComponent title='Koinos Buttons'>
              <OutlineButton text='Koinos Button' onClick={console.log('Clicked')} />
              <SolidButton text='Solid Koinos Button' onClick={console.log('Clicked')} />
              <Link href="https://koinos.io/" text='Koinos Link'></Link>
            </VerticalComponent>
            <p className='text-2xl font-bold'>Horizontal Component</p>
            <HorizontalComponent title='Koinos Typography'>
              <div className='flex flex-col gap-2'>
              <p className='font-normal text-md'>The font used is Poppins</p>
              <Link href='https://fonts.google.com/specimen/Poppins' text='Poppins on Google Fonts'/>
                <p className='font-normal'>font-light: Use for regular text</p>
                <p className='font-normal'>font-normal: Use for subtitles</p>
                <p className='font-semibold'>font-semibold: Use for links</p>
                <p className='font-bold'>font-bold: Use for titles</p>
              </div>
              <div>
                <p className='font-thin'>Font-weight: 100</p>
                <p className='font-extralight'>Font-weight: 200</p>
                <p className='font-light'>Font-weight: 300</p>
                <p className='font-normal'>Font-weight: 400</p>
                <p className='font-medium'>Font-weight: 500</p>
                <p className='font-semibold'>Font-weight: 600</p>
                <p className='font-bold'>Font-weight: 700</p>
                <p className='font-extrabold'>Font-weight: 800</p>
                <p className='font-black'>Font-weight: 900</p>
              </div>
          </HorizontalComponent>
        </div>
      </main>
      <Footer>
          <div className='flex flex-col flex-wrap gap-4 '>
            <p className='font-bold'>Technology</p>
            <Link href='https://koinos.io/unified-whitepaper/' text='Whitepaper' />
            <Link href='https://koinos.io/mainnet/' text='Documentation' />
            <Link href='https://github.com/koinos' text='Github' />
          </div>
          <div className='flex flex-col flex-wrap gap-4 '>
            <p className='font-bold'>Socials</p>
            <OutlineButton text='Social Button' onClick={console.log('Clicked')} />
            <OutlineButton text='Discord Button' onClick={console.log('Clicked')} />
            <OutlineButton text='Twitter Button' onClick={console.log('Clicked')} />
            <Input buttonText='subscribe' onSubmit={() => console.log('Submitted')} placeholder='email address' />
          </div>
      </Footer>
    </>
  )
}

export default Home
