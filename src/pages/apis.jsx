import React, { Component } from 'react'
import { Box } from "@mui/material";
import PropTypes from 'prop-types';
import RandomUser from "../components/apis/randomUser";
import Pokemon from "../components/apis/pokemonApi";

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default class Apis extends Component {

    render() {
        return (
            <>
                <div style={{ width: '100%' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            p: 1,
                            m: 1,
                            bgcolor: 'background.paper',
                            borderRadius: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Item>
                            JSON Place Holder API
                            <RandomUser/>
                        </Item>
                        <Item>
                            Pokemon
                            <Pokemon/>
                        </Item>
                        <Item>Item 3</Item>
                    </Box>


                </div>
            </>
        )
    }
}