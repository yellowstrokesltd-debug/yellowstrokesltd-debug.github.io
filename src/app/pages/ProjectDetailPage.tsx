import { useParams, Navigate } from 'react-router-dom';
import DoBetterPage from './project-details/DoBetterPage';
import BeyondTheClassroomPage from './project-details/BeyondTheClassroomPage';

export default function ProjectDetailPage() {
    const { slug } = useParams();

    if (slug === 'do-better-be-better') {
        return <DoBetterPage />;
    } else if (slug === 'beyond-the-classroom') {
        return <BeyondTheClassroomPage />;
    }

    // Fallback if the slug is not found
    return <Navigate to="/projects" replace />;
}
