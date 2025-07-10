import { useContext, createContext } from 'react'

const MoreOnContext = () => {
    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                More on Context
            </h2>
            <Section>
                <Heading>My Profile</Heading>
                <Post title="Hello traveller!" body="Read about my adventures." />
                <AllPosts />
            </Section>
        </>
    )
}

const AllPosts = () => {
    return (
        <Section>
            <Heading>Posts</Heading>
            <RecentPosts />
        </Section>
    )
}

const RecentPosts = () => {
    return (
        <Section>
            <Heading>Recent Posts</Heading>
            <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
            <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
        </Section>
    )
}

const Post = ({ title, body }) => {
    return (
        <Section isFancy={true}>
            <Heading>{title}</Heading>
            <p><i>{body}</i></p>
        </Section>
    )
}

const Section = ({ children, isFancy }) => {
    const level = useContext(LevelContext)

    return (
        <section className={'section' + (isFancy ? ' fancy' : '')}>
            <LevelContext value={level + 1}>
                {children}
            </LevelContext>
        </section>
    )
}

const Heading = ({ children }) => {
    const level = useContext(LevelContext)

    switch (level) {
        case 1: {
            console.log('Heading from level 1')
            return <h1 className="text-5xl">{children}</h1>
        }

        case 2: {
            return <h2 className="text-4xl">{children}</h2>
        }

        case 3: {
            return <h3 className="text-3xl">{children}</h3>
        }

        case 4: {
            return <h4 className="text-2xl">{children}</h4>
        }

        case 5: {
            return <h5 className="text-xl">{children}</h5>
        }

        case 6: {
            return <h6 className="text-sm">{children}</h6>
        }

        default: {
            throw new Error('Unknown heading level: ', level)
        }
    }
}

const LevelContext = createContext(0)

export default MoreOnContext