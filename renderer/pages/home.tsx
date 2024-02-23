import Head from 'next/head'
import Image from 'next/image'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PhoneInput from '../components/PhoneInput'
import CentralWrapper from '../components/CentralWrapper'
import { useAtomValue } from 'jotai'
import { phoneNumberAtom } from '../lib/jotai'
import { ROUTES } from '../lib/Routes'

// Renders a first page of the sign up flow
// where the user is asked to enter their phone number
export default function HomePage() {
  const phoneNumber = useAtomValue(phoneNumberAtom)

  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <CentralWrapper>
        <Image
          src="/images/signup.png"
          alt="Logo image"
          width="200px"
          height="150px"
          objectFit="scale-down"
          priority
        />
        <Typography fontWeight="bold" alignSelf="center">
          What's your Phone Number?
        </Typography>
        <PhoneInput />
        <Button
          variant="contained"
          disabled={phoneNumber == null}
          color="primary"
          href={ROUTES.VERIFY_CODE}
        >
          Next
        </Button>
      </CentralWrapper>
    </>
  )
}
