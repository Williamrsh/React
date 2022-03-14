import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
        setValue(newValue);
    }
    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" className='tabbar' onChange={handleChange}>
                        <Tab label="Todas as postagens" value="1" />
                        <Tab label="Sobre-nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1" >
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet mattis vulputate enim nulla. Tincidunt dui ut ornare lectus sit. Lacinia quis vel eros donec ac odio. Nisi lacus sed viverra tellus in hac habitasse platea. Aenean sed adipiscing diam donec adipiscing tristique risus nec. Mi quis hendrerit dolor magna eget est. Sagittis aliquam malesuada bibendum arcu vitae elementum. Convallis a cras semper auctor neque vitae tempus. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Habitant morbi tristique senectus et netus.</Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}
export default TabPostagem;