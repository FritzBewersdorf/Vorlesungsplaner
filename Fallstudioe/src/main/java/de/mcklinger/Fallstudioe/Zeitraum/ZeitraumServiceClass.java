package de.mcklinger.Fallstudioe.Zeitraum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ZeitraumServiceClass {
    @Autowired
    private ZeitraumRepository ZeitraumRepository;

    public List<Zeitraum> listAll() {
        return ZeitraumRepository.findAll();
    }

    public void save(Zeitraum Zeitraum) {
        ZeitraumRepository.save(Zeitraum);
    }

    public Zeitraum get(Long id){
        return ZeitraumRepository.findById(id).get();
    }

    public void delete(Long id){
        ZeitraumRepository.deleteById(id);
    }
}
