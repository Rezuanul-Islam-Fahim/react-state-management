import { createContext, useContext } from 'react'

const PassingDataWithContext = () => {
    return (
        <>
            <h2 className="card-title text-2xl mb-4">
                Passing data deeply with Context
            </h2>
            <Section>
                <Heading>This is heading</Heading>
                <Heading>This is heading</Heading>
                <Heading>This is heading</Heading>
                <Section>
                    <Heading>This is sub-heading</Heading>
                    <Heading>This is sub-heading</Heading>
                    <Heading>This is sub-heading</Heading>
                    <Section>
                        <Heading>This is sub-sub-heading</Heading>
                        <Heading>This is sub-sub-heading</Heading>
                        <Heading>This is sub-sub-heading</Heading>
                        <Section>
                            <Heading>This is sub-sub-sub-heading</Heading>
                            <Heading>This is sub-sub-sub-heading</Heading>
                            <Heading>This is sub-sub-sub-heading</Heading>
                            <Section>
                                <Heading>This is sub-sub-sub-heading</Heading>
                                <Heading>This is sub-sub-sub-heading</Heading>
                                <Heading>This is sub-sub-sub-heading</Heading>
                                <Section>
                                    <Heading>This is sub-sub-sub-heading</Heading>
                                    <Heading>This is sub-sub-sub-heading</Heading>
                                    <Heading>This is sub-sub-sub-heading</Heading>
                                </Section>
                            </Section>
                        </Section>
                    </Section>
                </Section>
            </Section>
        </>
    )
}

const Section = ({ children }) => {
    const level = useContext(LevelContext)

    return (
        <section className="section">
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

export default PassingDataWithContext