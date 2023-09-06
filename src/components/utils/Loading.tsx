import { Button } from '@mui/joy'
import React from 'react'

// {setTimeout(() => {location.href='http://localhost:5173/home'}, 5000)}
type Props = {}

const Loading = (props: Props) => {
    return (
        <div>
            <Button size="lg" variant="plain" loading>Loading</Button>
        </div>
    )
}

export default Loading