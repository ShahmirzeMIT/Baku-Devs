import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { Box, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

interface Props {
    lessonCount: number;
    course: string;
    description: string;
    img: string;
}
const CourseCard = ({ lessonCount, course, description, img }: Props) => {
    return (
        <Box sx={{
            maxWidth: 270,
            minWidth: 200,
            height: 400,
            borderRadius: 5,
            boxShadow: 9
        }}>
            <Stack sx={{ gap: 2, padding: 2 }} >
                <img style={{ width: '100%' }} src={img} alt={course} />

                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        height: 40,
                        minWidth: "82px",
                        backgroundColor: ' #fbe2c6',
                        marginTop: 1,
                        borderRadius: 2
                    }}>
                        <Typography component="p" sx={{
                            width: '100%',
                            textAlign: "center",
                            margin: 1
                        }}>
                            {course}
                        </Typography>
                    </Box>
                    <Stack flexDirection="row" sx={{ marginTop: 1 }}>
                        <SlowMotionVideoIcon sx={{ color: 'gray' }} />
                        <Typography sx={{
                            color: 'gray',
                            width: 60
                        }}>{lessonCount} dərs</Typography>
                    </Stack>
                </Stack>

                <Divider />
                <Box sx={{
                    display: 'flex',
                    justifyContent: "space-around",
                    gap: 7

                }}>
                    <Typography sx={{ fontWeight: 600, fontSize: 18 }}>{description}</Typography>
                    <PlayCircleIcon sx={{
                        fontSize: 60,
                        color: "primary.main"
                    }} />
                </Box>
            </Stack>
        </Box>
    )
}
export default CourseCard;
