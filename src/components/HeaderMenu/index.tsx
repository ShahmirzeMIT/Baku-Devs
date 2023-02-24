import React, { useState } from "react"
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import menuImg from "assets/headerbg.png"
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    children: React.ReactNode;
}
const HeaderMenu = ({ children }: Props) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    return (
        <>
            <div onClick={() => {
                setMenuOpen(true)
            }}>
                {children}
            </div>
            {
                menuOpen && <Box sx={{
                    position: 'fixed',
                    inset: 0,
                    backgroundImage: `url("${menuImg}")`,
                    backgroundSize: 'cover',
                    backgroundColor: 'white',
                    zIndex: 100,
                    color: "black"
                }}>
                    <Stack direction="row">
                        <Box
                            sx={{
                                '& p': {
                                    fontSize: 32,
                                    fontWeight: 600,
                                    WebkitTextStrokeWidth: 1,
                                    WebkitTextStrokeColor: 'black',
                                    cursor: 'pointer'
                                }
                            }}
                        >
                            <Box sx={{ textAlign: 'right' }}>
                                <IconButton onClick={() => {
                                    setMenuOpen(false)
                                }}>
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <Typography
                                onClick={() => { setActiveTab(0) }}
                                sx={{
                                    color: activeTab === 0 ? 'black' : 'transparent'
                                }}
                            >Frontend</Typography>
                            <Typography
                                onClick={() => { setActiveTab(1) }}
                                sx={{
                                    color: activeTab === 1 ? 'black' : 'transparent',
                                }}
                            >Backend</Typography>
                            <Typography
                                onClick={() => { setActiveTab(2) }}
                                sx={{
                                    color: activeTab === 2 ? 'black' : 'transparent',
                                }}
                            >UI/UX</Typography>
                        </Box>
                        <Stack direction="row" maxHeight={200}>
                            <Divider orientation="vertical" />
                            {activeTab === 0 &&
                                <div>
                                    <p> HTML</p>
                                    <p> CSS</p>
                                    <p> Bootstrap</p>
                                    <p> Javascript</p>
                                    <p> JQuery</p>
                                    <p> React.JS</p>
                                </div>
                            }
                            {activeTab === 1 &&
                                <div>
                                    <p> nodejs</p>
                                    <p> express</p>
                                    <p> mongo</p>
                                </div>
                            }
                            {activeTab === 2 &&
                                <div>
                                    <p> figma</p>
                                    <p> psd</p>
                                    <p> adobe</p>
                                </div>
                            }
                        </Stack>
                    </Stack>
                </Box>
            }
        </>
    )
}
export default HeaderMenu
