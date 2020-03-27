package de.mcklinger.Fallstudioe.Nutzer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NutzerRepository extends JpaRepository <Nutzer, Long> {

    List<Nutzer> findByNutEmailAndNutPasswort(String nutEmail, String nutPasswort);

}
