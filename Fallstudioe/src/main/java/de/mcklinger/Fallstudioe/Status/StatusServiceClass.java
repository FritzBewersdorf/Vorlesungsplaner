package de.mcklinger.Fallstudioe.Status;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class StatusServiceClass {
    @Autowired
    private StatusRepository StatusRepository;

    public List<Status> listAll() {
        return StatusRepository.findAll();
    }

    public void save(Status Status) {
        StatusRepository.save(Status);
    }

    public Status get(Long id){
        return StatusRepository.findById(id).get();
    }

    public void delete(Long id){
        StatusRepository.deleteById(id);
    }
}
