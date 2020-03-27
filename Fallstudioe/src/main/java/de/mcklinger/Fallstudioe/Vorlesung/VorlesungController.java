package de.mcklinger.Fallstudioe.Vorlesung;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
public class VorlesungController {
    @Autowired
    private VorlesungServiceClass VorlesungServiceClass;

    @GetMapping("/Vorlesung/0") //GetAll
    public List<Vorlesung> list() {
        return VorlesungServiceClass.listAll();
    }

    @GetMapping("/Vorlesung/{id}") //GetByID
    public ResponseEntity<Vorlesung> get(@PathVariable Long id){
        try {
            Vorlesung Vorlesung = VorlesungServiceClass.get(id);
            return new ResponseEntity<Vorlesung>(Vorlesung, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Vorlesung>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Vorlesung")
    public void add(@RequestBody Vorlesung Vorlesung) {
        VorlesungServiceClass.save(Vorlesung);
    }

    @PutMapping("/Vorlesung/{id}") //Put
    public ResponseEntity<?> update(@RequestBody Vorlesung Vorlesung, @PathVariable Long id) {
        try {
            Vorlesung existVolesung = VorlesungServiceClass.get(id);
            existVolesung.setVorDatum(Vorlesung.getVorDatum());
            existVolesung.setVorTitel(Vorlesung.getVorTitel());
            existVolesung.setZeitraum(Vorlesung.getZeitraum());
            VorlesungServiceClass.save(existVolesung);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/Vorlesung/{id}") //Delete
    public void delete(@PathVariable Long id) {
        VorlesungServiceClass.delete(id);
    }
}
