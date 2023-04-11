import { useState } from 'react'

// import { useTheme } from '@mui/material/styles'

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
  Button,
  Icon,
  IconButton,
  InputAdornment,
  Divider
} from '@mui/material'

import { Lock, Email, VisibilityOff, Visibility } from '@mui/icons-material'

import { blue } from '@mui/material/colors'

function LoginCard() {
  const [isPassVisible, setIsPassVisible] = useState(false)

  // const appTheme = useTheme()

  return (
    <Card sx={{ maxWidth: '500px', backgroundColor: blue[300] }} raised={true}>
      <CardHeader title="Login"></CardHeader>
      <CardContent>
        <TextField
          label="Email"
          variant="outlined"
          margin="dense"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <Email />
                </Icon>
              </InputAdornment>
            )
          }}
        ></TextField>
        <TextField
          label="password"
          type={isPassVisible ? 'text' : 'password'}
          variant="outlined"
          margin="dense"
          fullWidth={true}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <Lock />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setIsPassVisible((oldState) => !oldState)
                  }}
                >
                  {isPassVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            )
          }}
        ></TextField>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button size="small" color="secondary" variant="contained">
          Register
        </Button>
        <Button size="small" color="primary" variant="contained">
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginCard
