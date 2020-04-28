import Home from 'components/Home'
import Post from 'components/Post'
import Comment from 'components/Comment'
import Album from 'components/Album'
import Photo from 'components/Photo'
import User from 'components/User'
import Todo from 'components/Todo'

export default [
    { path: '/', exact: true, isPrivate: true, component: Home },
    { path: '/posts', exact: false, isPrivate: false, component: Post },
    { path: '/comments', exact: false, isPrivate: false, component: Comment },
    { path: '/albums', exact: false, isPrivate: false, component: Album },
    { path: '/photos', exact: false, isPrivate: false, component: Photo },
    { path: '/users', exact: false, isPrivate: false, component: User },
    { path: '/todos', exact: false, isPrivate: false, component: Todo },
    // { path: `*`, exact: true, isPrivate: true, component: NotFound } // al final
]