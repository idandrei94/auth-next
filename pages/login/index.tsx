import React from 'react';
import { LockClosedIcon } from '@heroicons/react/20/solid';
import { GetServerSideProps } from 'next';
import { getCsrfToken } from 'next-auth/react';

interface Props {
  csrfToken: string;
}

const LoginPage: React.FC<Props> = ({ csrfToken }) => {
  return (
    <div className='flex h-full items-center justify-center bg-purple-700'>
      <div className='bg-black/30 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 rounded-lg shadow'>
        <div className='w-full max-w-md space-y-8'>
          <div>
            <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-purple-300'>
              Bitte ultra secret Kennwort eingeben
            </h2>
          </div>
          <form
            className='mt-8 space-y-6'
            action='/api/auth/callback/credentials'
            method='POST'
          >
            <input name='csrfToken' type='hidden' defaultValue={csrfToken} />
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='-space-y-px rounded-md shadow-sm'>
              <div>
                <label htmlFor='password' className='sr-only'>
                  Ultra secret Kennwort
                </label>
                <input
                  id='password'
                  name='password'
                  type='password'
                  required
                  className='relative block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm'
                  placeholder='Ultra secret Kennwort'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                  <LockClosedIcon
                    className='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
                    aria-hidden='true'
                  />
                </span>
                Anmelden
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  };
};
