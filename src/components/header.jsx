import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from './ui/button'
import { SignedOut, SignedIn, SignInButton, UserButton, SignIn, useUser } from '@clerk/clerk-react'
import { BriefcaseBusiness, Heart, PenBox } from 'lucide-react'

const Header = () => {

    // const {user} = useUser();

    const [showSignIn, setShowSignIn] = useState(false);

    const [search, setSearch] = useSearchParams();

    const {user} = useUser();

    useEffect(()=>{
        if (search.get('sign-in')){
            setShowSignIn(true);
        }
    },[search])

    const handleOverlayClick=(e)=>{
        if(e.target === e.currentTarget){
            setShowSignIn(false);
            setSearch({});
        }
    };

  return (
    <>
        <nav className='py-4 px-15 flex justify-between items-center'>
            <Link to='/'>
                <img src='/logo.png' className='h-20'></img>
            </Link>

            <div className='flex gap-8'>
            
                <SignedOut>
                    <Button variant='outline' onClick={()=>setShowSignIn(true)}>
                        Login
                    </Button>
                </SignedOut>
                <SignedIn>
                    {/* add a condition */}
                    {user?.unsafeMetadata?.role === 'recruiter' && (
                        <Link to='/post-job'>
                            <Button variant='destructive' className='rounded-full'>
                                <PenBox size={20} className='mr-2'></PenBox>
                                Post a Job
                            </Button>
                        </Link>
                    )}
                   
                    <UserButton appearance={{
                        elements:{
                            avatarBox: 'w-10 h-10',
                        },
                    }}
                    >
                        <UserButton.MenuItems>
                            <UserButton.Link
                                label='My Jobs'
                                labelIcon = {<BriefcaseBusiness size={15}/>}
                                href='/my-jobs'
                            />
                            <UserButton.Link
                                label='Saved Jobs'
                                labelIcon = {<Heart size={15}/>}
                                href='/saved-jobs'
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                </SignedIn>
            </div>
        </nav>
        

        {showSignIn && <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'
            onClick={handleOverlayClick}
        >
            <SignIn
                signUpForceRedirectUrl='/onboarding'
                fallbackRedirectUrl='/onboarding'
            />
        </div>}
        {/* {showSignIn && <div className='fixed inset-0 flex items-center justify-center'
    style={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
    onClick={handleOverlayClick}
>
    <div className='bg-white rounded-lg shadow-xl'>
        <SignIn
            signUpForceRedirectUrl='/onboarding'
            fallbackRedirectUrl='/onboarding'
        />
    </div>
</div>} */}
    </>
  )
}

export default Header