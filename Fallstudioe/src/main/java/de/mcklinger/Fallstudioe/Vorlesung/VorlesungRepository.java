package de.mcklinger.Fallstudioe.Vorlesung;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VorlesungRepository extends JpaRepository <Vorlesung, Long> {

}
