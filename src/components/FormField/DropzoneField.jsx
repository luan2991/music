const { FormControl, FormHelperText, Box, Typography } = require('@mui/material');

const { useEffect, useCallback } = require('react');
const { useDropzone } = require('react-dropzone');
const { Controller } = require('react-hook-form');

const DropzoneField = ({ name, form, handleDropFile, ...rest }) => {
  // const { control } = useFormContext();
  const { errors } = form.formState;
  const errorsMessage = errors[name]?.message;
  const hasError = !!errorsMessage;
  return (
    <FormControl error={hasError} component="fieldset">
      <Controller
        render={({ field: { onChange } }) => (
          <Dropzone
            form={form}
            name={name}
            handleDropFile={handleDropFile}
            onChange={(e) => onChange(e.target.files[0])}
            {...rest}
            defaultValue=""
          />
        )}
        name={name}
        control={form.control}
      />
      <FormHelperText>{errorsMessage}</FormHelperText>
    </FormControl>
  );  
};

const Dropzone = ({ files, handleDropFile, onChange, name, form, ...rest }) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxFiles: 1,
    accept: rest.accept,
    onDrop: (acceptedFiles) => {
      console.log(acceptedFiles);
      form.setValue(name, acceptedFiles);
      handleDropFile(acceptedFiles);
    },
  });

  const thumbs = files.map((file, index) => (
    <div
      key={index}
      style={{
        width: '50px',
      }}
    >
      <div
        style={{
          display: 'inline-flex',
          marginBottom: 8,
          marginRight: 8,
          width: 100,
          height: 100,
          padding: 4,
          boxSizing: 'border-box',
        }}
        key={file.name}
      >
        <div style={{ display: 'flex', minWidth: 0, overflow: 'hidden' }}>
          <img
            src={file.type === 'audio/mpeg' ? require('./pngegg.png').default : file.preview}
            alt="images" //require('./pngegg.png').default
            style={{ display: 'block', width: 'auto', height: '100%' }}
          />
        </div>
      </div>
      <Typography variant="caption" noWrap sx={{ fontSize: '1rem' }}>
        {file.name}
      </Typography>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
    <Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '600px',
          padding: '20px',
          borderWidth: '2px',
          borderRadius: '2px',
          borderColor: '#eeeeee',
          borderStyle: 'dashed',
          backgroundColor: '#fafafa',
          color: '#bdbdbd',
          outline: 'none',
          transition: 'border .24s ease-in-out',
          cursor: 'pointer',
        }}
        {...getRootProps()}
      >
        <input {...getInputProps({ onChange })} />
        {isDragActive ? <p>{rest.label}</p> : <p>{rest.defaultlabel}</p>}
      </Box>
      <Box>{thumbs}</Box>
    </Box>
  );
};
export default DropzoneField;
