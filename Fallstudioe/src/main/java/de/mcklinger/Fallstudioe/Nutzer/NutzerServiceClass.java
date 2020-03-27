package de.mcklinger.Fallstudioe.Nutzer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class NutzerServiceClass {
    @Autowired
    private NutzerRepository nutzerRepository;

    public List<Nutzer> listAll() {
        return  nutzerRepository.findAll();
    }

    public void save(Nutzer Nutzer){
        nutzerRepository.save(Nutzer);
    }

    public Nutzer get(Long id) {
        return nutzerRepository.findById(id).get();
    }

    public void delete(Long id) {
        nutzerRepository.deleteById(id);
    }

    public boolean isExistDozent(Nutzer nutzer)
    {
        if(nutzerRepository.findByNutEmailAndNutPasswort(nutzer.getNutEmail(), nutzer.getNutPasswort()).size() == 1)
        {
            if(nutzerRepository.findByNutEmailAndNutPasswort(nutzer.getNutEmail(), nutzer.getNutPasswort()).get(0).getStatus().getStaId() == 2)
            {
                return true;
            }
        }
        return false;
    }

    public boolean isExistAdmin(Nutzer nutzer)
    {
        if(nutzerRepository.findByNutEmailAndNutPasswort(nutzer.getNutEmail(), nutzer.getNutPasswort()).size() == 1)
        {
            if(nutzerRepository.findByNutEmailAndNutPasswort(nutzer.getNutEmail(), nutzer.getNutPasswort()).get(0).getStatus().getStaId() == 1)
            {
                return true;
            }
        }
        return false;
    }

    public long getNutzerId(Nutzer nutzer) {
        return nutzerRepository.findByNutEmailAndNutPasswort(nutzer.getNutEmail(), nutzer.getNutPasswort()).get(0).getNutId();
    }



}