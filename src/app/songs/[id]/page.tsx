import convexClient from '@/utils/convexClient';
import { useParams } from 'next/navigation'
import { api } from '../../../../convex/_generated/api';

const SongPage = async () => {
    const params = useParams<{ id: string }>()
    const song = await convexClient.query(api.songs., { id: params.id })
}

export default SongPage;