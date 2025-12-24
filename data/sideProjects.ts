export interface SideProject {
  id: string
  name: string
  url: string
  description?: string
}

// Add your side projects here
export const sideProjects: SideProject[] = [
  {
    id: '1',
    name: 'Face Recognition Attendance System',
    url: '#', // Update with actual URL when available
    description: 'An image-based attendance system built with Python and Flask. A web application for registering and recognizing faces via a browser interface. Provides pages to register new faces (name + photos), recognize faces from uploaded images, and run live recognition from a webcam stream.',
  },
]

