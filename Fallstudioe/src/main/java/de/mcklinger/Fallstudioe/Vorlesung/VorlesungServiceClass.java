package de.mcklinger.Fallstudioe.Vorlesung;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class VorlesungServiceClass {
    @Autowired
    private VorlesungRepository VorlesungRepository;

    public List<Vorlesung> listAll() {
        return VorlesungRepository.findAll();
    }

    public void save(Vorlesung Vorlesung) {
        VorlesungRepository.save(Vorlesung);
    }

    public Vorlesung get(Long id){
        return VorlesungRepository.findById(id).get();
    }

    public void delete(Long id){
        VorlesungRepository.deleteById(id);
    }
}
