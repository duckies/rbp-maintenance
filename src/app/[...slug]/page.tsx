import { redirect } from 'next/navigation';

export default function RedirectAll() {
  redirect('/');

  return <></>;
}
