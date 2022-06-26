import React, { useState, useEffect, useRef } from "react";
import { queries, mutations, Auth, parseProps } from "../utils"
import { useParams } from "react-router-dom"

import * as uuid from "uuid";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "./n2style.css"
import Signout from "./Signout";

function ALTEditFormMob() {
    const buttonscontsx = {
        width: "100%"
    }
    const buttonscont2sx = {
        width: "60%",
        display: "flex",
        justifyContent: "center",
        margin: "auto",
    }

    const gray = {
        color: "rgba(0,0,0,0.5)"
    }

    const pink = {
        color: "rgba(200,0,0,0.5)"

    }

    const deloptsx = {
        display: "flex",
    }

    const editiconsx = {

        opacity: ".9",
        position: "absolute",
        top: "0px",
        right: "0px",
        fontSize: "30px",
        opacity: ".85",

    }

    const iconboxsx = {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        opacity: "1.0",

    }

    const checkiconsx = {
        position: "absolute",
        top: "0px",
        right: "0px",
        fontSize: "30px",
        opacity: ".85",


    }
    const deliconsx = {
        position: "absolute",
        top: "0px",
        right: "40px",
        fontSize: "30px",
        opacity: ".85",


    }
    const checkiconboxsx = {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        opacity: ".85",


    }

    const freeiconsx = {

        opacity: ".25",
        "&:hover": {
            opacity: ".85",
            cursor: "pointer"
        }

    }

    const boxsx = {

        position: "relative",
        width: "100%",
    }
    const editboxsx = {
        position: "relative",
        width: "100%",
        borderLeft: "5px solid #42A5F5",
        paddingLeft: "10px"

    }
    const noneditboxsx = {
        position: "relative",
        width: "100%",
        borderLeft: "5px solid white",
        paddingLeft: "10px"

    }

    const formsx = {
        /* Auto layout */

        padding: {
            xs: "10vh 5vh",
            md: "10vh 10vh",
        },
        overflow: "auto",

        position: "relative",
        width: "100vw",
        minHeight: "100vh",

        /* Light/Background/Paper */
        background: "#FFFFFF",
    }

    const toolbarsx = {

        width: "100%",
        height: "40px",
        display: "flex",
        justifyContent: "space-evenly",
        margin: "auto",
        display: "flex",
        alignItems: "center"
    }

    const toolboxsx = {
        display: "flex",
        marginRight: "15px",
        marginLeft: "15px",
        opacity: ".85",

    }

    const fontsx = {
        fontFamily: 'Roboto',
        fontStyle: "normal",
    }

    const titlesx = {
        fontSize: "34px",
        lineHeight: "123.5%",
        letterSpacing: "0.25px"

    }

    const headsx = {
        fontSize: "24px",
        lineHeight: "123.5%",
        letterSpacing: "0.25px"

    }

    const normsx = {
        fontSize: "16px",
        lineHeight: "150%",
        letterSpacing: "0.15px"

    }

    const plussx = {
        width: "75px"
    }

    const NormalRender = ({ piece }) => {

        let parsed = parseProps(piece.props);
        if (piece._type == "header") {
            if (parsed.htext == "" && parsed.hsubtext == "") {
                return (
                    <>
                        <Typography sx={{ ...fontsx, ...headsx, ...pink }}>Empty Header</Typography>
                    </>
                )
            } else {
                return (
                    <>
                        <Typography sx={{ ...fontsx, ...headsx }}>{parsed.htext}</Typography>
                        {parsed.hsubtext && <Typography sx={{ ...fontsx, ...normsx }}>{parsed.hsubtext}</Typography>}

                    </>
                )

            }

        } else if (piece._type == "break") {
            return (
                <>
                    <br />
                    <Divider variant="middle" />

                </>
            )
        } else if (piece._type == "question") {
            //{parsed.qsubtext  && <Typography sx={{...fontsx,...subsx}}>{parsed.qsubtext}</Typography>}<br/>
            if (parsed.qtext == "" && parsed.qsubtext == "") {
                return (
                    <>
                        <Typography sx={{ ...fontsx, ...headsx, ...pink }}>Empty Question</Typography>
                    </>
                )
            } else {

                if (parsed.qtype == "text") {
                    //if text box height is given use box, else line
                    if (parsed.inLength && parsed.inLength != 1) {
                        let r = parsed.inLength;

                        return (
                            <>
                                <Typography sx={{ ...fontsx, ...normsx }}>{parsed.qtext}</Typography><br />
                                <TextField sx={{ width: `70%` }}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={r}
                                    label={parsed.qsubtext}
                                />

                            </>
                        )
                    } else {
                        return (
                            <>
                                <Typography sx={{ ...fontsx, ...normsx }}>{parsed.qtext}</Typography>
                                <TextField id="standard-basic" sx={{ width: `70%` }} label={parsed.qsubtext} variant="standard" />

                            </>
                        )
                    }

                } else if (parsed.qtype == "check") {
                    var renoc = [];
                    if (parsed.qoptions) {
                        for (var i = 0; i < piece.props.length; i++) {
                            let aa = piece.props[i].value;
                            if (piece.props[i].key == "qoptions") {
                                renoc.push(<FormControlLabel control={<Checkbox />} label={aa} />)
                            }
                        }
                    }

                    return (
                        <>
                            <Typography sx={{ ...fontsx, ...normsx }}>{parsed.qtext}</Typography>
                            <FormLabel >{parsed.qsubtext}</FormLabel>
                            <FormGroup>
                                {renoc}
                            </FormGroup>

                        </>
                    )
                } else if (parsed.qtype == "radio") {
                    //if text box height is given, set it, else 1 line
                    var renor = [];
                    if (parsed.qoptions) {
                        for (var i = 0; i < piece.props.length; i++) {
                            let aa = piece.props[i].value;
                            if (piece.props[i].key == "qoptions") {
                                renor.push(<FormControlLabel control={<Radio />} label={aa} value={aa} />)
                            }
                        }
                    }

                    ////okok the component below has to be a unique identifier, right?
                    return (
                        <>
                            <Typography sx={{ ...fontsx, ...normsx }}>{parsed.qtext}</Typography>
                            <FormControl>
                                <FormLabel >{parsed.qsubtext}</FormLabel>
                                <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                                    {renor}
                                </RadioGroup>
                            </FormControl>
                        </>
                    )
                } else {
                    return (
                        <div>
                            <h4> A qtypeless question appeared in the wild</h4>
                        </div>
                    )
                }
            }
        } else {
            return (
                <div>
                    <h4> A typeless piece appeared in the wild</h4>
                </div>

            )
        }
    };

    const Titler = ({ form }) => {

        return (
            <>
                <Typography sx={{ ...fontsx, ...titlesx }}>{form.title}</Typography>
                {form.description && <Typography sx={{ ...fontsx, ...normsx }}>{form.description}</Typography>}
                <br />
                <Divider variant="middle" />
                <br />
            </>
        )
    };
    ////////////////////////scratch/function area/////////////////////////////////////////////////////////////////////

    const [saving, setSaving] = useState(false);

    const [pieces, _setPieces] = useState([]);
    const pieceArrRef = useRef(pieces);
    const setPieces = (d) => {
        _setPieces(d);
        pieceArrRef.current = d;
    }

    const [confirm, _setConfirm] = useState({ clear: "no", delete: "no" });
    const confirmRef = useRef(confirm);
    const setConfirm = (f) => {
        _setConfirm(f);
        confirmRef.current = f;
    }

    const [aPiece, _setAPiece] = useState({});
    const pieceRef = useRef(aPiece);
    const setAPiece = (c) => {
        _setAPiece(c);
        pieceRef.current = c;
    }

    const optionRef = useRef({});

    const [form, _setForm] = useState({});
    const formRef = useRef(form);
    const setForm = (d) => {
        _setForm(d);
        formRef.current = d;
    }

    const [editing, _setEditing] = useState('');
    const editRef = useRef(editing);
    const setEditing = (b) => {
        _setEditing(b);
        editRef.current = b;
    }

    const EditingRender = ({ piece }) => {

        setAPiece(piece)
        const handleChange = (e) => {
            let P = pieceRef.current;
            P.props = P.props.filter(pr => pr.key != e.target.name);
            P.props.push({ key: e.target.name, value: e.target.value });
            setAPiece(P);
        };

        const handleOptionChange = (e) => {
            optionRef.current = { key: "qoptions", value: e.target.value }
        }

        const submitOption = () => {
            if (optionRef.current) {
                let P = pieceRef.current;
                P.props.push(optionRef.current)
                setAPiece(P);
                const index = pieceArrRef.current.map(e => e.piid).indexOf(piece.piid);
                setPieces([...pieceArrRef.current.slice(0, index), pieceRef.current, ...pieceArrRef.current.slice(index + 1)]);
                optionRef.current = (null);

            }

        }


        const deleteOption = (f) => {
            let P = pieceRef.current;
            P.props = P.props.filter(pr => !(pr.key == "qoptions" && pr.value == f));
            setAPiece(P);
            const index = pieceArrRef.current.map(e => e.piid).indexOf(piece.piid);
            setPieces([...pieceArrRef.current.slice(0, index), pieceRef.current, ...pieceArrRef.current.slice(index + 1)]);
            optionRef.current = (null);

        }


        //let parsed= parseProps(pieceRef.current.props);
        let parsed = parseProps(piece.props);

        if (piece._type == "header") {
            return (
                <>


                    <TextField

                        label="Header"
                        name="htext"
                        placeholder="Section Title"
                        variant="standard"
                        defaultValue={parseProps(pieceRef.current.props).htext}
                        onChange={handleChange}
                    /><br />


                    <TextField

                        label="Subheader"
                        name="hsubtext"
                        placeholder="Section Subtitle"
                        variant="standard"
                        defaultValue={parseProps(pieceRef.current.props).hsubtext}
                        onChange={handleChange}
                    />



                </>
            )
        } else if (piece._type == "break") {
            return (
                <>
                    <br />
                    <Divider variant="middle" />

                </>
            )
        } else if (piece._type == "question") {

            if (parsed.qtype == "text") {
                //if text box height is given use box, else line
                if (parsed.inLength && parsed.inLength != 1) {
                    let r = parsed.inLength;
                    return (
                        <>
                            <TextField
                                label="Question text"
                                name="qtext"
                                variant="standard"
                                defaultValue={parseProps(pieceRef.current.props).qtext}
                                onChange={handleChange}
                            /><br />

                            <TextField sx={{ width: `70%` }}
                                id="outlined-multiline-static"
                                multiline
                                rows={r}
                                label={parseProps(pieceRef.current.props).qsubtext}

                            />

                        </>
                    )
                } else {
                    return (
                        <>
                            <TextField
                                label="Question text"
                                name="qtext"
                                variant="standard"
                                defaultValue={parseProps(pieceRef.current.props).qtext}
                                onChange={handleChange}
                            /><br />
                            <TextField
                                label="Question Label"
                                name="qsubtext"
                                variant="standard"
                                defaultValue={parseProps(pieceRef.current.props).qsubtext}
                                onChange={handleChange}
                            /><br />
                            {/* <Box sx={sliderboxsx}>
                                <br />
                                <Typography sx={{ ...fontsx, ...normsx, ...gray }}>Text Entry Width</Typography>
                                <Slider
                                    size="small"
                                    defaultValue={parsed.inWidth}
                                    aria-label="Small"
                                    valueLabelDisplay="auto"
                                    name="inWidth"
                                    min={10}
                                    onChange={handleChange}
                                    onChangeCommitted={handleUnclick}
                                />
                            </Box> */}

                            <TextField id="standard-basic" sx={{ width: `70%` }} label={parseProps(pieceRef.current.props).qsubtext} variant="standard" />

                        </>
                    )

                }

            } else if (parsed.qtype == "check") {
                var renoc = [];
                if (parsed.qoptions) {
                    console.log(parsed.qoptions);
                    for (var i = 0; i < piece.props.length; i++) {
                        let aa = piece.props[i].value;
                        if (piece.props[i].key == "qoptions") {
                            renoc.push(
                                <Box sx={deloptsx} >
                                    <FormControlLabel control={<Checkbox />} label={aa} />
                                    <DeleteIcon sx={{ ...freeiconsx, marginTop: "10px" }} onClick={() => { deleteOption(aa) }} />
                                </Box>)
                        }
                    }
                }
                return (
                    <>
                        <TextField
                            label="Question text"
                            name="qtext"
                            placeholder="Question"
                            variant="standard"
                            defaultValue={parseProps(pieceRef.current.props).qtext}
                            onChange={handleChange}
                        /><br />
                        <TextField
                            label="Question Subtext"
                            name="qsubtext"
                            placeholder="Subquestion"
                            variant="standard"
                            defaultValue={parseProps(pieceRef.current.props).qsubtext}
                            onChange={handleChange}
                        />

                        <FormGroup>
                            {renoc}
                        </FormGroup><br />



                        <TextField
                            label="Add option"
                            name="qoptions"
                            placeholder="Answer"
                            variant="standard"
                            onChange={handleOptionChange}
                        />
                        <CheckCircleIcon sx={freeiconsx} onClick={() => { submitOption() }} />


                    </>
                )

            } else if (parsed.qtype == "radio") {
                var renor = [];
                if (parsed.qoptions) {
                    for (var i = 0; i < piece.props.length; i++) {
                        let aa = piece.props[i].value;
                        if (piece.props[i].key == "qoptions") {
                            renor.push(
                                <Box sx={deloptsx} >
                                    <FormControlLabel control={<Radio />} label={aa} value={aa} />
                                    <DeleteIcon sx={{ ...freeiconsx, marginTop: "10px" }} onClick={() => { deleteOption(aa) }} />
                                </Box>)
                        }
                    }
                }
                return (
                    <>
                        <TextField
                            label="Question text"
                            name="qtext"
                            placeholder="Question"
                            variant="standard"
                            defaultValue={parseProps(pieceRef.current.props).qtext}
                            onChange={handleChange}
                        /><br />
                        <TextField
                            label="Question Subtext"
                            name="qsubtext"
                            placeholder="Subquestion"
                            variant="standard"
                            defaultValue={parseProps(pieceRef.current.props).qsubtext}
                            onChange={handleChange}
                        /><br />

                        <FormControl>
                            <RadioGroup aria-labelledby="demo-radio-buttons-group-label" name="radio-buttons-group">
                                {renor}
                            </RadioGroup><br />
                        </FormControl><br />

                        <TextField
                            label="Add option"
                            name="qoptions"
                            placeholder="Answer"
                            variant="standard"
                            onChange={handleOptionChange}
                        />
                        <CheckCircleIcon sx={freeiconsx} onClick={() => { submitOption() }} />

                    </>
                )

            } else {
                return (
                    <div>
                        <h4> A qtypeless question appeared in the wild</h4>
                    </div>

                )

            }
        } else {
            return (
                <div>
                    <h4> A typeless piece appeared in the wild</h4>
                </div>

            )
        }
    };


    ///////////////////////////toolbar stuff////////////////
    //      //////////////////////////popmenu stuff////////////////
    const BasicMenu = ({ l }) => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const handleClick = (e) => {
            setAnchorEl(e.currentTarget);
        };
        const handleClose = () => {
            setAnchorEl(null);
        };

        return (
            <div>
                <Box sx={toolboxsx}
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <AddCircleIcon sx={plussx} color="primary" fontSize={"large"} />

                </Box>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                    autoFocus={false}
                    disableAutoFocusItem={true}
                >
                    <MenuItem onClick={() => {
                        handleClose();
                        addPiece("header", l);
                    }}>Header</MenuItem>
                    <MenuItem onClick={() => {
                        handleClose();
                        addPiece("break", l);
                    }}>Divider</MenuItem>
                    <MenuItem onClick={() => {
                        handleClose();
                        addPiece("question", l, "ss");
                    }}>Single Select</MenuItem>
                    <MenuItem onClick={() => {
                        handleClose();
                        addPiece("question", l, "ms");
                    }}>Multiple Select</MenuItem>
                    <MenuItem onClick={() => {
                        handleClose();
                        addPiece("question", l, "st");
                    }}>Single Line Text</MenuItem>
                    <MenuItem onClick={() => {
                        handleClose();
                        addPiece("question", l, "mt");
                    }}>Multiple Line Text</MenuItem>
                    
                </Menu>
            </div>
        );
    }

    //      /////////////////end popup menu stuff////////////////////////////////////////////////



    ///////////////////////////end toolbar stuff////////////////

    ///////////////////////////right side buttons stuff////////////////////////

    const Rightbutton = ({ }) => {
        const menusx = {
            "&:hover": {
                backgroundColor: "transparent"
            },
            "&.Mui-focusVisible": {
                backgroundColor: "transparent"
            },
            "& .MuiMenuItem-root": {
                "&.Mui-focusVisible": {
                    backgroundColor: "transparent"
                },
                "&:hover": {
                    backgroundColor: "transparent"
                },
            },
        }

        return (

            <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                    <React.Fragment>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                minWidth: "64px",
                                height: "50px"
                            }}
                            {...bindTrigger(popupState)}
                        >
                            <MenuTwoToneIcon
                                fontSize={"large"}
                                sx={{
                                    ...plussx,
                                    width: "auto",
                                    color: "#FFF"
                                }}
                            />
                        </Button>
                        <Menu
                            {...bindMenu(popupState)}
                            elevation={0}
                            disableAutoFocusItem={true}
                            autoFocus={false}
                            sx={{
                                top: "25px",
                                borderRadius: "4px",
                                minWidth: {
                                    xs: "320px"
                                },
                                "& .MuiMenu-root": {
                                    "& :hover": {
                                        backgroundColor: "transparent"
                                    }
                                },
                            }}
                        >
                            <MenuItem onClick={() => { return }} sx={menusx}>
                                <Box sx={buttonscontsx}>
                                    <ButtonsTwo conf={confirm} key={"buttons2"} />
                                    <ButtonsOne form={form} key={"buttons1"} />
                                </Box>

                            </MenuItem>

                            <MenuItem onClick={popupState.close} sx={menusx}>
                                <Box sx={buttonscont2sx}>CLOSE MENU</Box>
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        )
    }

    async function saveform(xx) {
        // console.log(xx)
        let zz = removeIds(xx);
        const ids = (await mutations.updateFormPieces(String(id), zz))?.result;
        if (!ids) return
        setPieces(xx.map((x, i) => {
            x._id = ids[i];
            return x;
        }));

        displaySave();

        console.log(zz)
    }
    async function publishform() {
        await saveform(pieceArrRef.current);
        await mutations.setPublished(id, true);
        setForm({ ...formRef.current, published: true });
    }
    function unpublishform() {
        //set published = true, then
        setForm({ ...formRef.current, published: false });
        mutations.setPublished(id, false);
    }
    function clearformconf() {
        setConfirm({ clear: "yes", delete: "no" })
        console.log("are you sure?, all your questions will be erased.")
    }
    function deleteformconf() {
        setConfirm({ clear: "no", delete: "yes" })
        console.log("are you sure?, all your questions will be erased.")
    }
    function cancel() {
        setConfirm({ clear: "no", delete: "no" })
    }

    function clearform() {
        setConfirm({ clear: "no", delete: "no" })
        setPieces([])
    }
    async function deleteform() {///////////////////////////////////////////////////////////////////db call here!!!!!!!!!!!!!!!!!!!
        await mutations.deleteForm(id);
        window.location.assign(window.location.origin)
    }

    async function gotodash(yy) {
        await saveform(yy);
        window.location.assign(window.location.origin)
    }

    function ButtonsTwo({ conf }) {

        if (conf.clear == "no" & conf.delete == "no") {
            return (
                <Stack spacing={2} direction="column">
                    <Button variant="outlined" onClick={clearformconf} color="error">CLEAR FORM </Button>
                    <Button variant="contained" onClick={deleteformconf} color="error">DELETE FORM</Button><br /><br /><br /><br /><br />
                </Stack>
            )
        } else if (conf.clear == "yes") {
            return (
                <Stack sx={{paddingTop:"10vh", paddingLeft:"10vw", paddingRight:"10vw"}} spacing={2} direction="column">
                    <Button variant="contained" onClick={clearform} color="success">CONFIRM CLEAR </Button>
                    <Button variant="contained" onClick={clearform} color="success">CONFIRM CLEAR2 </Button>
                    <Button variant="contained" onClick={clearform} color="success">CONFIRM CLEAR3 </Button>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ ...fontsx, ...normsx, ...gray }}>All questions will be deleted in form and responses.</Typography>
                    </Box>

                    <Button variant="outlined" onClick={cancel} >CANCEL</Button><br /><br />
                </Stack>
            )

        } else {
            return (
                <Stack sx={{paddingTop:"10vh", paddingLeft:"10vw", paddingRight:"10vw"}} spacing={2} direction="column">
                    <Button variant="contained" onClick={deleteform} color="error">CONFIRM DELETE </Button>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ ...fontsx, ...normsx, ...gray }}>Form, response link, and responses will be deleted.</Typography>
                    </Box>

                    <Button variant="outlined" onClick={cancel} >CANCEL</Button><br /><br />
                </Stack>
            )

        }
    }

    function XX({ conf, save }) {

        if(save==true){
            return(
                <Card sx={{...formsx, display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    
                    <Typography sx={{ ...fontsx, ...normsx, ...gray, margin:"auto" }}>Your form has been saved!</Typography>
                </Card>
            )
        }else{

        if (conf.clear == "no" & conf.delete == "no") {
            return (
                <Box>

                    {/* rightbutton */}
                    <div className="mainmenu">
                        <Rightbutton />
                    </div>

                    <Card sx={formsx}>

                        <Titler form={form}
                            sx={{
                                borderLeft: "5px solid white",
                                fontSize: { sm: "2rem" }
                            }} />
                        <Editor pieces={pieces} />
                    </Card>
                </Box>
            )
        } else if (conf.clear == "yes") {
            return (
                <Stack sx={{paddingTop:"30vh", paddingLeft:"15vw", paddingRight:"15vw"}} spacing={3} direction="column">
                    <Button variant="contained" onClick={clearform} color="error">CONFIRM CLEAR </Button>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ ...fontsx, ...normsx, ...gray, margin:"auto" }}>All questions will be deleted in form and responses.</Typography>
                    </Box>
                    <Button variant="outlined" onClick={cancel} >CANCEL</Button><br /><br />
                </Stack>
            )

        } else {
            return (
                <Stack sx={{paddingTop:"30vh", paddingLeft:"15vw", paddingRight:"15vw"}} spacing={3} direction="column">
                    <Button variant="contained" onClick={deleteform} color="error">CONFIRM DELETE </Button>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ ...fontsx, ...normsx, ...gray, margin:"auto" }}>Form, response link, and responses will be deleted.</Typography>
                    </Box>
                    <Button variant="outlined" onClick={cancel} >CANCEL</Button><br /><br />
                </Stack>
            )

        }
        }
    }




    function ButtonsOne({ form }) {

        let rlink = `${window.location.origin}/respond/${form.endpoint ?? id}`

        if (form.published == false) {
            return (

                <Stack spacing={2} direction="column">
                    <Button variant="contained" onClick={() => { saveform(pieceArrRef.current) }}>SAVE FORM </Button>
                    <Button variant="outlined" onClick={() => { gotodash(pieceArrRef.current) }}>BACK TO MY FORMS </Button>
                    <Button variant="outlined" onClick={publishform}>PUBLISH</Button>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ ...fontsx, ...normsx, ...gray }}>Form is currently not available to respondents</Typography>

                    </Box>
                    <br /><br />


                </Stack>

            )
        } else {
            return (
                <Stack spacing={2} direction="column">
                    <Button variant="contained" onClick={() => { saveform(pieceArrRef.current) }}>SAVE FORM </Button>
                    <Button variant="outlined" onClick={() => { gotodash(pieceArrRef.current) }}>BACK TO MY FORMS </Button>
                    <Button variant="outlined" onClick={unpublishform}>UNPUBLISH</Button>
                    <Box sx={{ display: "flex" }}>
                        <Typography sx={{ ...fontsx, ...normsx, ...gray }}>Form currently published at:</Typography>
                        <Typography sx={{ ...fontsx, ...normsx, ...gray }}><a href={rlink}>{rlink}</a></Typography>


                    </Box>


                </Stack>
            )
        }
    }



    function Editor({ pieces }) {

        //prob add key below
        //this is where we check which piece is in editing mode, now we only have non editing mode 
        var renP = [];
        for (var i = 0; i < pieces.length; i++) {

            let a = pieces[i].piid;

            //if currently being edited then editing render
            if (a == editRef.current) {
                renP.push(
                    <>
                        <Box Key={a}>
                            <Box sx={toolbarsx}>
                                <BasicMenu l={a} />
                            </Box>
                            <Box sx={editboxsx} >
                                <Box sx={boxsx}   >
                                    <Box sx={checkiconboxsx}>
                                        <DeleteIcon sx={deliconsx} onClick={() => { delPiece(a) }} />
                                        <CheckCircleIcon sx={checkiconsx} onClick={() => { edit('-1') }} />
                                    </Box><br />
                                    <EditingRender piece={pieces[i]} />
                                </Box>
                            </Box>
                        </Box>

                    </>
                );


            } else {
                renP.push(
                    <>
                        <Box Key={a}>
                            <Box sx={toolbarsx}>
                                <BasicMenu l={a} />
                            </Box>
                            <Box sx={noneditboxsx}  >
                                <Box sx={boxsx}   >
                                    <Box sx={iconboxsx}>
                                        <EditIcon sx={editiconsx} onClick={() => { edit(a) }} />
                                    </Box><br />
                                    <NormalRender piece={pieces[i]} />
                                </Box>
                            </Box>
                        </Box>
                    </>
                );

            }

        }
        return (
            <>
                {renP}
                <br />
                <Box sx={toolbarsx}>
                    <BasicMenu l={'-1'} />
                </Box>

            </>
        )


    }

    const { id } = useParams();
    let [loading, setLoading] = useState(true)

    useEffect(() => {

        async function req() {
            let loggedIn = Auth.loggedIn()
            if (!loggedIn) {
                window.location.replace(window.location.origin + "/login")
                return
            }
            let reqForm = (await queries.getFormByID(id))?.result ?? {}
            let reqPieces = (await queries.getPiecesByID(id))?.result ?? []
            setForm(reqForm)
            let spc = reqPieces.map((piece) => {
                let z = {
                    ...piece,
                    piid: uuid.v4()
                }
                return z;
            })
            setPieces(spc);
            console.log(formRef.current)
            console.log("yo this one")
            console.log(spc)
            setLoading(false)
        }
        req()



        setEditing('-1');


    }, [])

    function removeIds(zz) {
        return zz.map((piece) => {
            return {
                _id: piece._id,
                _type: piece._type,
                props: piece.props,
                form_ref: id
            }
        });
    }







    function addPiece(type, loc, qt = "-1") {

        const P = { piid: uuid.v4(), _type: type, props: [] };

        if (type == "break") {
            setEditing('-1');
        } else {
            if (type == "question") {
                if (qt == "ss") {
                    P.props.push({ key: "qtype", value: "radio" }, { key: "qtext", value: "" }, { key: "qsubtext", value: "" });
                } else if (qt == "ms") {
                    P.props.push({ key: "qtype", value: "check" }, { key: "qtext", value: "" }, { key: "qsubtext", value: "" })
                } else if (qt == "st") {
                    P.props.push({ key: "qtype", value: "text" }, { key: "qtext", value: "" }, { key: "qsubtext", value: "" }, { key: "inLength", value: "1" }, { key: "inWidth", value: "50" })
                } else if (qt == "mt") {
                    P.props.push({ key: "qtype", value: "text" }, { key: "qtext", value: "" }, { key: "qsubtext", value: "" }, { key: "inLength", value: "8" }, { key: "inWidth", value: "50" })
                } else {
                    console.log("why though");
                }
            } else {
                P.props.push({ key: "htext", value: "" }, { key: "hsubtext", value: "" })

            }
            setEditing(P.piid);
        }

        if (loc == "-1") {
            setPieces([...pieces, P]);
        } else {
            const index = pieces.map(e => e.piid).indexOf(loc);
            setPieces([...pieces.slice(0, index), P, ...pieces.slice(index)]);
        }

    }



    function edit(a) {
        setEditing(a);
    }

    function delPiece(c) {
        setEditing('-1');
        setPieces(pieces.filter(p => p.piid != c))
    }

    function displaySave(){
        setSaving(true);
        setTimeout(()=>{setSaving(false)},1000);
    }


    return (
        <>

            <CssBaseline />
            <XX form={form} pieces={pieces} conf={confirm} save={saving} />
            <Signout sx={{ left: "54px" }} />
        </>
    )
}

export default ALTEditFormMob;


