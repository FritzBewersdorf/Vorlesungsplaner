package de.mcklinger.Fallstudioe.Status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
public class StatusController {
    @Autowired
    private StatusServiceClass StatusServiceClass;

    @GetMapping("/Status/0") //GetAll
    public List<Status> list() {
        return StatusServiceClass.listAll();
    }

    @GetMapping("/Status/{id}") //GetByID
    public ResponseEntity<Status> get(@PathVariable Long id){
        try {
            Status Status = StatusServiceClass.get(id);
            return new ResponseEntity<Status>(Status, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Status>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Status")
    public void add(@RequestBody Status Status) {
        StatusServiceClass.save(Status);
    }

    @PutMapping("/Status/{id}") //Put
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Status Status) {
        try {
            Status existStatus = StatusServiceClass.get(id);
            existStatus.setStaBezeichnung(Status.getStaBezeichnung());
            existStatus.setStaId(Status.getStaId());
            StatusServiceClass.save(existStatus);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/Status/{id}") //Delete
    public void delete(@PathVariable Long id) {
        StatusServiceClass.delete(id);
    }
}