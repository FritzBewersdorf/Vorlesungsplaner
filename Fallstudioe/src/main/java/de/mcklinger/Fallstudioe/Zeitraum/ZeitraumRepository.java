package de.mcklinger.Fallstudioe.Zeitraum;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZeitraumRepository extends JpaRepository <Zeitraum, Long> {

}
