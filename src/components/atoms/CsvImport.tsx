import { Importer, ImporterField } from 'react-csv-importer';
import 'react-csv-importer/dist/index.css';
import { memo } from 'react';
import axios from 'axios';

export const CsvImport = memo(() => {
  return (
    <Importer
      assumeNoHeaders={false} // optional, keeps "data has headers" checkbox off by default
      restartable={false} // optional, lets user choose to upload another file when import is complete
      onStart={({ file, preview, fields, columnFields }) => {
        // optional, invoked when user has mapped columns and started import
        console.log(file, preview, fields, columnFields)
      }}
      processChunk={async (rows, { startIndex }) => {
        // required, may be called several times
        // receives a list of parsed objects based on defined fields and user column mapping;
        // (if this callback returns a promise, the widget will wait for it before parsing more data)
        for (const row of rows) {
          console.log(row)
          axios
            .put(`http://localhost:1337/api/items/${row.id}`, {
              // id:p.target.value,
              // attributes:{
              //   status: false
              // }
              data: {
                // status: row,
                name: row.name,
                category: row.category,
              }
            }).catch(() => {
              axios.post(`http://localhost:1337/api/items`, {
                data: {
                  // status: row,
                  id: row.id,
                  name: row.name,
                  category: row.category,
                }
              }).then(response => {
                console.log(response);
              }).catch((error) => {
                console.log(error)
              });
            })
        }
      }}
      onComplete={({ file, preview, fields, columnFields }) => {
        // optional, invoked right after import is done (but user did not dismiss/reset the widget yet)
        console.log(file, preview, fields, columnFields)

      }}
      onClose={({ file, preview, fields, columnFields }) => {
        // optional, if this is specified the user will see a "Finish" button after import is done,
        // which will call this when clicked
        console.log(file, preview, fields, columnFields)
        window.location.reload();
      }}

    // CSV options passed directly to PapaParse if specified:
    // delimiter={...}
    // newline={...}
    // quoteChar={...}
    // escapeChar={...}
    // comments={...}
    // skipEmptyLines={...}
    // delimitersToGuess={...}
    // chunkSize={...} // defaults to 10000
    // encoding={...} // defaults to utf-8, see FileReader API
    >
      <ImporterField name="id" label="id" />

      <ImporterField name="name" label="Name" />
      <ImporterField name="category" label="category" />
    </Importer>
  )
})