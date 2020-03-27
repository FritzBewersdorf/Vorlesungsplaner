package de.mcklinger.Fallstudioe.Nutzer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin
public class NutzerController {

    @Autowired
    private NutzerServiceClass nutzerServiceClass;

    @GetMapping("/Nutzer/0")
    public List<Nutzer> list(){
        return nutzerServiceClass.listAll();
    }

    @GetMapping("/Nutzer/{id}")
    public ResponseEntity<Nutzer> get(@PathVariable Long id){
        try {
            Nutzer nutzer = nutzerServiceClass.get(id);
            return new ResponseEntity<Nutzer>(nutzer, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Nutzer>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/Nutzer")
    public void add (@RequestBody Nutzer nutzer){
        nutzerServiceClass.save(nutzer);
    }

    @PutMapping("/Nutzer/{id}")
    public ResponseEntity<?> update(@RequestBody Nutzer Nutzer, @PathVariable Long id){
        try {
            Nutzer existNutzer = nutzerServiceClass.get(id);
            existNutzer.setNutNachname(Nutzer.getNutNachname());
            existNutzer.setNutVorname(Nutzer.getNutVorname());
            existNutzer.setStatus(Nutzer.getStatus());
            nutzerServiceClass.save(existNutzer);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/Nutzer/{id}")
    public void delete(@PathVariable Long id) {
        nutzerServiceClass.delete(id);
    }

    //////////////////LOGIN//////////////////////////////////////////////////////

    @PostMapping("/Nutzer-Login")
    public boolean dozentCheck(@RequestBody Nutzer Nutzer) {
        if(nutzerServiceClass.isExistDozent(Nutzer))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    @PostMapping("/Admin-Login")
    public boolean adminCheck(@RequestBody Nutzer Nutzer) {
        if(nutzerServiceClass.isExistAdmin(Nutzer))
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    @PostMapping("/Nutzer-Id")
    public long getNutzerId(@RequestBody Nutzer Nutzer) {
        return nutzerServiceClass.getNutzerId(Nutzer);
    }

}
