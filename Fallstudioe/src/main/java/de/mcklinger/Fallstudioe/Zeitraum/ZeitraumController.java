package de.mcklinger.Fallstudioe.Zeitraum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
public class ZeitraumController {
    @Autowired
    private ZeitraumServiceClass ZeitraumServiceClass;

    @GetMapping("/Zeitraum/0") //GetAll
    public List<Zeitraum> list() {
        return ZeitraumServiceClass.listAll();
    }

    @GetMapping("/Zeitraum/{id}") //GetByID
    public ResponseEntity<Zeitraum> get(@PathVariable Long id){
        try {
            Zeitraum Zeitraum = ZeitraumServiceClass.get(id);
            return new ResponseEntity<Zeitraum>(Zeitraum, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Zeitraum>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Zeitraum")
    public void add(@RequestBody Zeitraum Zeitraum) {
        ZeitraumServiceClass.save(Zeitraum);
    }

    @PutMapping("/Zeitraum/{id}") //Put
    public ResponseEntity<?> update(@RequestBody Zeitraum Zeitraum, @PathVariable Long id) {
        try {
            Zeitraum existZeitraum = ZeitraumServiceClass.get(id);
            existZeitraum.setZeiBeginn(Zeitraum.getZeiBeginn());
            existZeitraum.setZeiEnde(Zeitraum.getZeiEnde());
            ZeitraumServiceClass.save(existZeitraum);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/Zeitraum/{id}") //Delete
    public void delete(@PathVariable Long id) {
        ZeitraumServiceClass.delete(id);
    }
}