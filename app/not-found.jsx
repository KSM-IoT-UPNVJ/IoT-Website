import Button from '@/components/shared/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-black text-center px-4">
      <p className="text-xl md:text-3xl mt-4 text-biru-tua">Nyasar mas</p>
      <Link href={'/'}>
        <Button className="mt-6 px-6 py-3">Kembali ke Beranda</Button>
      </Link>
    </div>
  );
}
