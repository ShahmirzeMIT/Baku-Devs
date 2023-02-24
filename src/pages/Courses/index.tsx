import { Stack, Button, Container } from "@mui/material";
import PageContainer from "components/PageContainer";
import Card from "components/CourseCard"
import Rectangle11 from 'assets/Rectangle11.svg'
import { useState } from "react";

// Namiq: change static content to dynamic data. 

const getCoursesFromBackend = () => ([
    {
        id: 0,
        lessonCount: 18,
        course: 'Frontend',
        img: Rectangle11,
        description: 'Loerm ipsum dolor amet'
    },
    {
        id: 1,
        lessonCount: 8,
        course: 'Backend',
        img: Rectangle11,
        description: 'Loerm ipsum dolor amet'
    },
]
)

const Courses = ({ }) => {
    const [courses, setCourses] = useState([])
    // getCoursesFromBackend cagir state-i doldur. 
    // useReducer

    return (
        <PageContainer bannerName='Kurslar'>
            <Container maxWidth="lg" sx={{ py: 5, mb: 3 }}>
                <Stack py={4} mb={3} justifyContent='center' direction='row' gap='10px'>
                    <Button
                        // onClick dispatch
                        variant="contained">All</Button>
                    <Button variant="outlined">Frontend</Button>
                    <Button variant="outlined">Backend</Button>
                    <Button variant="outlined">UI/UX</Button>
                </Stack>
                <Stack direction='row' flexWrap='wrap' justifyContent={{ xs: 'center', lg: 'space-between' }} gap={3}>
                    {
                        courses.map(({ id, lessonCount, course, img, description }: any) => {
                            return (
                                <Card key={id} lessonCount={lessonCount} course={course} img={img} description={description} />
                            )
                        })
                    }
                    {/* <Card lessonCount={18} course='Frontend' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='Backend' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='UI/UX' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='Frontend' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='Backend' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='UI/UX' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='Backend' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='Frontend' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={18} course='UI/UX' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='Frontend' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='Backend' img={Rectangle11} description='Loerm ipsum dolor amet' />
                    <Card lessonCount={8} course='UI/UX' img={Rectangle11} description='Loerm ipsum dolor amet' /> */}
                </Stack>
            </Container>
        </PageContainer>
    )
}

export default Courses
